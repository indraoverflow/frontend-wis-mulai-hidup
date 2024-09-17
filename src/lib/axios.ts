import axios, { AxiosInstance } from "axios";
import { getSession } from "next-auth/react";
import config from "@/lib/config";

// Create an Axios instance with default configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: `http://localhost:3001`,
//   baseURL: `${config.apiUrl}`,
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add a request interceptor to include the token from NextAuth
axiosInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session) {
      const { user } = session;
      if (user.accessToken) {
        // add token to headers
        config.headers["token"] = `Bearer ${user.accessToken}`;
        // add token to query params
        config.params = { token: user.accessToken };
      }
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Optional: Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle response data
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
