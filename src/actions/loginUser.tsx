import config from "@/lib/config";
import axios from "axios";

export async function loginUser(data: { email: string; password: string }) {
  try {
    const res = await axios.get(`${config.apiUrl}/protect`, {
      withCredentials: true,
    });

    const response = await axios.post(`${config.apiUrl}/auth/login`, data, {
      headers: {
        Cookie: res.headers["set-cookie"]?.join("; "),

        "XSRF-TOKEN": res.data.csrf_token,
      },
      withCredentials: true,
    });

    // console.log(response.data);

    return response.data;
  } catch (e: any) {
    throw new Error(e.response.data.message);
  }
}
