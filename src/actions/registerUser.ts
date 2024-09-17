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

    return response.data;
  } catch (e: any) {
    throw new Error(e.response.data.message);
  }
}
