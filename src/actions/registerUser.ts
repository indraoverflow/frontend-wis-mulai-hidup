import config from "@/lib/config";
import { UserRegisterType } from "@/types/user-register-type";
import axios from "axios";

export async function registerUser(data: UserRegisterType) {
  try {
    const res = await axios.get(`${config.apiUrl}/protect`, {
      withCredentials: true,
    });

    const response = await axios.post(
      `${config.apiUrl}/auth/register`,
      {
        ...data,
        phone_number: data.phoneNumber,
      },
      {
        headers: {
          Cookie: res.headers["set-cookie"]?.join("; "),

          "XSRF-TOKEN": res.data.csrf_token,
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (e: any) {
    throw new Error(e.response.data.message);
  }
}
