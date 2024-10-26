"use server";

import config from "@/lib/config";
import axios from "axios";

const fetchProfile = async (token: string, id: string) => {
  // console.log("api url => ", config.apiUrl);

  try {
    const response = await axios.get(`${config.apiUrl}/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.log("error get profile server => ", error);
  }
};

export default fetchProfile;
