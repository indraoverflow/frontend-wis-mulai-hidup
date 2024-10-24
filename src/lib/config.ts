const config = {
  nextAuthSecret: process.env.NEXTAUTH_SECRET,
  nextAuthUrl: process.env.NEXTAUTH_URL,
  apiUrl: process.env.API_URL,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  xenditSecretKey: process.env.XENDIT_SECRET_KEY,
  xenditUrl: process.env.XENDIT_URL,
};

export default config;
