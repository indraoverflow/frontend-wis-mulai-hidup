/** @type {import('next').NextConfig} */
import dotenv from "dotenv";

dotenv.config();

const nextConfig = {
  output: "standalone",
  env: {
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;
