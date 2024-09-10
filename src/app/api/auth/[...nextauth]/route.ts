import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
// imports
import config from "@/lib/config";
import NextAuth, { NextAuthOptions } from "next-auth";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

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
          const res = await axios.post(`${config.apiUrl}/auth/login`, {
            email: email,
            password: password,
          });

          console.log("token data => ", res.data.token);

          const decoded: {
            id: string;
            name: string;
            email: string;
            role_name: string;
          } = jwtDecode(res.data.token.access_token);
          console.log("decoded => ", decoded);

          const user = {
            id: decoded.id,
            name: decoded.name,
            email: decoded.email,
            roleName: decoded.role_name,
          };
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }) {
      // console.log("account => ", account);
      // console.log("profile => ", profile);
      // console.log("user => ", user);
      // console.log("token => ", token);
      if (user) {
        // This will only be executed at login. Each next invocation will skip this part.
        // token.accessToken = user.token.accessToken;
        // token.refreshToken = user.token.refreshToken;
      }

      // if (account?.provider === "credentials") {
      //   token.id = user?.id;
      //   // token.role = user?.role;
      //   token.email = user?.email;
      //   token.name = user?.name;
      // }
      // if (user) {
      //   token.id = user.id;
      // }
      return token;
    },
    async session({ session, token }) {
      if (token.email) {
        session.user!.email = token.email;
      }
      if (token.name) {
        session.user!.name = token.name;
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
