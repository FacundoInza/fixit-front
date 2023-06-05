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

export const axiosSignUp = async (value) => {
  try {
    console.log("value", value);
    const { data } = await axios.post(`${apiUrl}users/signup`, value, {
      withCredentials: true,
    });
    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
};
