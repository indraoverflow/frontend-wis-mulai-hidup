import axios, { AxiosInstance } from "axios";
import { getSession, signOut } from "next-auth/react";
import config from "@/lib/config";
import { setCookie } from "nookies";
import { set } from "date-fns";

// Create an Axios instance with default configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${config.apiUrl}`,
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

// Add a request interceptor to include the token from NextAuth
axiosInstance.interceptors.request.use(
  async (axiosConfig) => {
    const session = await getSession();
    axiosConfig.withCredentials = true;
    if (session) {
      const { user } = session;
      if (user.accessToken) {
        setCookie(null, "access_token", user.accessToken, {});

        // add token to headers
        axiosConfig.headers["token"] = `Bearer ${user.accessToken}`;
        axiosConfig.headers["Authorization"] = `${user.accessToken}`;
        // add token to query params (move to per request)
        // axiosConfig.params = { token: user.accessToken };
      }

      if (user.refreshToken) {
        setCookie(null, "refresh_token", user.refreshToken, {});
      }
      const res = await axios.get(`${config.apiUrl}/protect`, {
        withCredentials: true,
      });
      console.log(res);

      axiosConfig.headers["X-CSRF-TOKEN"] = res.data.csrf_token;
      (axiosConfig.headers["refresh_token"] = user.refreshToken),
        (axiosConfig.headers["Cookie"] =
          res.headers["set-cookie"]?.join("; ") +
          "refresh_token=" +
          user.refreshToken);

      console.log(
        res.headers["set-cookie"] + "refresh_token=" + user.refreshToken
      );
    }
    return axiosConfig;
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
  async (error) => {
    // Handle response error
    let message = error.response.data.message;
    console.log(message === "TOKEN_EXPIRED");

    if (message === "TOKEN_EXPIRED") {
      const session = await getSession();

      if (session) {
        const { user } = session;
        if (user) {
          const res = await axiosInstance.get(
            `${config.apiUrl}/auth/refresh-token`,
            {
              withCredentials: true,
            }
          );
          console.log("refreh token", res.data.token);
          user.accessToken = res.data.token.access_token;
          user.refreshToken = res.data.token.refresh_token;
          session.user = user;
          console.log("user baru", user);
        }
      }
    }

    if (message === "Unauthorized") {
      signOut();
      console.log(message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
