import config from "@/lib/config";
import axios from "axios";

export default async function refreshAccessToken(tokenObject: {
  accessToken: string;
  refreshToken: string;
}) {
  try {
    // Get a new set of tokens with a refreshToken
    const tokenResponse = await axios.post(
      config.apiUrl + "auth/refreshToken",
      {
        Headers: {
          Cookie: `refresh_token=${tokenObject.refreshToken}; access_token=${tokenObject.accessToken};`,
        },
      }
    );

    return {
      ...tokenObject,
      accessToken: tokenResponse.data.accessToken,
      refreshToken: tokenResponse.data.refreshToken,
    };
  } catch (error) {
    return {
      ...tokenObject,
      error: "RefreshAccessTokenError",
    };
  }
}
