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
  callbacks: {
    async jwt({ token, account, profile, user }) {
      if(account?.provider === 'google'){
        // Jika user login menggunakan Google Provider
        if (account && profile) {
          token.id = profile.sub;
          token.email = profile.email;
          token.name = profile.name;
  
          // Panggil backend untuk memeriksa atau menyimpan data user ke database
          try {
            const res = await fetch("http://localhost:3001/auth/google", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: profile.sub,  // Google user ID
                email: profile.email,
                name: profile.name,
              }),
            });

            console.log('response auth google: ', res);
  
            const data = await res.json();
            console.log("Response from backend after Google login:", data);
  
            if (!res.ok) {
              throw new Error("Failed to authenticate with backend");
            }
  
            token.userId = data.userId;
          } catch (error) {
            console.error("Error during Google login API call:", error);
          }
        }
      }

      return token;
    },
    async session({ session, token, user }) {
      console.log('session token: ', token);
      session.user = token as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
