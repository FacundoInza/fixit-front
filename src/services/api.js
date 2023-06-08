import axios from "axios";
import { apiUrl } from "../config.json";
import qs from "qs";

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

export const axiosCasesUser = async (id, filterAds) => {
  try {
    const { status, period, device } = filterAds;
    let query = qs.stringify(filterAds);
    console.log(query);

    const { data } = await axios.get(
      `${apiUrl}cases/filterGlober/${id}?${query}`,
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const axiosUpdateUser = async (update, id) => {
  try {
    console.log(update);
    const { data } = await axios.put(`${apiUrl}users/update/${id}`, update);
    return { message: data };
  } catch (error) {
    throw new Error({ message: "The user was not updated" });
  }
};

export const axiosIndividualCase = async (id) => {
  try {
    const { data } = await axios.get(`${apiUrl}cases/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const axiosAllDevices = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}devices/all`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
