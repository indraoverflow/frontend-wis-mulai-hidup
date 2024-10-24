/** @type {import('next').NextConfig} */
import dotenv from "dotenv";
import { urlToHttpOptions } from "url";

dotenv.config();

const urlInfo = urlToHttpOptions(new URL(process.env.API_URL));
console.log(urlInfo, process.env.API_URL, process.env.NODE_ENV);

const nextConfig = {
  output: "standalone",
  env: {
    API_URL: process.env.API_URL,
    XENDIT_SECRET_KEY: process.env.XENDIT_SECRET_KEY,
    XENDIT_URL: process.env.XENDIT_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol:
          process.env.NODE_ENV == "development"
            ? "http"
            : urlInfo.protocol.replace(":", ""),
        hostname:
          process.env.NODE_ENV == "development"
            ? "localhost"
            : urlInfo.hostname ?? "",
        port:
          process.env.NODE_ENV == "development"
            ? "3001"
            : !isNaN(urlInfo.port)
            ? urlInfo.port.toString()
            : "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
