import axios, { AxiosInstance } from "axios";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import config from "@/lib/config";
import { setCookie } from "nookies";

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
    console.log(session);
    if (session) {
      const { user } = session;
      if (user.accessToken) {
        setCookie(null, "access_token", user.accessToken, {});

        // add token to headers
        axiosConfig.headers["token"] = `Bearer ${user.accessToken}`;
        axiosConfig.headers["Authorization"] = `Bearer ${user.accessToken}`;
      }

      if (user.refreshToken) {
        setCookie(null, "refresh_token", user.refreshToken, {});
      }
      const res = await axios.get(`${config.apiUrl}/protect`, {
        withCredentials: true,
      });
      console.log(res);

      axiosConfig.headers["X-XSRF-TOKEN"] = res.data.csrf_token;
      axiosConfig.headers["refresh_token"] = user.refreshToken;
      axiosConfig.headers["Cookie"] =
        res.headers["set-cookie"]?.join("; ") +
        "refresh_token=" +
        user.refreshToken;

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
    console.log(message === "TOKEN_EXPIRED" || message === "jwt expired");

    if (message === "TOKEN_EXPIRED" || message === "jwt expired") {
      const session = await getSession();

      if (session) {
        const { user } = session;
        if (user) {
          try {
            const res = await axiosInstance.get(
              `${config.apiUrl}/auth/refresh-token`,
              {
                withCredentials: true,
              }
            );
            console.log("refreh token", res.data.token);

            await signIn("jwt", {
              redirect: false,
              accessToken: res.data.token.access_token,
              refreshToken: res.data.token.refresh_token,
            });

            if (res.data.token.access_token) {
              setCookie(null, "access_token", res.data.token.access_token, {});
              setCookie(null, "refresh_token", res.data.token.refreh_token, {});
              error.config.headers[
                "Authorization"
              ] = `Bearer ${res.data.token.access_token}`;
              error.config.headers[
                "token"
              ] = `Bearer ${res.data.token.access_token}`;

              return axiosInstance(error.config);
            }
          } catch (error) {
            signOut();
            console.log(message);
          }
        }
      }
      console.log(session);
    }

    console.log(message);

    return Promise.reject(error);
  }
);

export default axiosInstance;
