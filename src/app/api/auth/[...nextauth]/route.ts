// imports
import config from "@/lib/config";
import NextAuth from "next-auth";

// importing providers
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: config.googleClientId as string,
      clientSecret: config.googleClientSecret as string,
    }),
  ],
});

export { handler as GET, handler as POST };
