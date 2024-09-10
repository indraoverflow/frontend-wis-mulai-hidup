"use server";
import config from "@/lib/config";
import { UserRegisterType } from "@/types/user-register-type";
import axios from "axios";

export async function registerUser(data: UserRegisterType) {
  try {
    console.log("api url => ", config.apiUrl);

    const response = await axios.post(`${config.apiUrl}/auth/register`, {
      ...data,
      phone_number: data.phoneNumber,
    });

    console.log("DAta => ", response.data);

    return response.data;
  } catch (e: any) {
    console.log("Error =>", e.response.data.message);
    return null;
  }
}
