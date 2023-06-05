import axios from "axios";
import { apiUrl } from "../config.json";

export const axiosLogin = async (value) => {
  try {
    console.log("v", value);
    console.log(apiUrl);
    const { data } = await axios.post(`${apiUrl}users/login`, value, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
