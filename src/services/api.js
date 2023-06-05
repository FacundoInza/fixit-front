import axios from "axios";
import { apiUrl } from "../config.json";

export const axiosLogin = async (value) => {
  try {
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
    const { data } = await axios.post(`${apiUrl}users/signup`, value, {
      withCredentials: true,
    });
    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
};

export const axiosSecret = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}users/secret`, {
      withCredentials: true,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
