import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
// imports
import config from "@/lib/config";
import NextAuth, { DefaultSession, NextAuthOptions, User } from "next-auth";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string | null;
      roleName?: string | null;
      accessToken?: string | null;
      refreshToken?: string | null;
    } & DefaultSession["user"];
  }

  interface User {
    roleName: string | null;
    accessToken: string | null;
    refreshToken: string | null;
  }
}

const getUserFromJwt = (accessToken: string, refreshToken: string): User => {
  const decoded: {
    id: string;
    name: string;
    email: string;
    role_name: string;
  } = jwtDecode(accessToken);

  const user: User = {
    id: decoded.id,
    name: decoded.name,
    email: decoded.email,
    roleName: decoded.role_name,
    accessToken: accessToken,
    refreshToken: refreshToken,
  };

  return user;
};

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: config.nextAuthSecret,
  providers: [
    GoogleProvider({
      clientId: config.googleClientId as string,
      clientSecret: config.googleClientSecret as string,
    }),
    Credentials({
      id: "jwt",
      type: "credentials",
      name: "jwt",
      credentials: {
        accessToken: {},
        refreshToken: {},
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const { accessToken, refreshToken } = credentials as {
          accessToken: string;
          refreshToken: string;
        };

        return getUserFromJwt(accessToken, refreshToken);
      },
    }),
    Credentials({
      id: "credentials",
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        if (!credentials) return null;
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          const res = await axios.get(`${config.apiUrl}/protect`, {
            withCredentials: true,
          });

          const response = await axios.post(
            `${config.apiUrl}/auth/login`,
            {
              email: email,
              password: password,
            },
            {
              headers: {
                Cookie: res.headers["set-cookie"]?.join("; "),

                "XSRF-TOKEN": res.data.csrf_token,
              },
              withCredentials: true,
            }
          );

          const user = getUserFromJwt(
            response.data.token.access_token,
            response.data.token.refresh_token
          );

          return user;
        } catch (error: any) {
          throw new Error(error.response?.data.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }) {
      if (account?.provider === "credentials" || account?.provider === "jwt") {
        return { ...token, ...user };
      }

      return token;
    },
    async session({ session, token }) {
      session.user.email = token.email;
      session.user.name = token.name;
      if ("id" in token) session.user.id = token.id as string;
      if ("roleName" in token) session.user.roleName = token.roleName as string;

      if ("accessToken" in token) {
        session.user.accessToken = token.accessToken as string;
      }

      if ("refreshToken" in token) {
        session.user.refreshToken = token.refreshToken as string;
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
