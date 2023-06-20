import axios from "axios";
import { apiUrl } from "../config.json";
import qs from "qs";

export const axiosLogin = async (value) => {
  try {
    const { data } = await axios.post(`${apiUrl}users/login`, value, {
      withCredentials: true,
    });

    document.cookie = "token=" + data.token;

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
  } catch (error) {
    console.log("error", error);
  }
};

export const axiosSecret = async () => {
  try {
    const token = document.cookie.token;

    const { data } = await axios.get(
      `${apiUrl}users/secret`,
      { token: token },
      {
        withCredentials: true,
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const axiosCasesUser = async (id, filterAds) => {
  try {
    const { status, period, device } = filterAds;
    let query = qs.stringify(filterAds);

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
    const { data } = await axios.put(`${apiUrl}users/update/${id}`, update);
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
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const axiosLogout = async () => {
  try {
    await axios.get(`${apiUrl}users/logout`, { withCredentials: true });
  } catch (error) {
    console.log(error);
  }
};

export const axiosGetNearbyOffice = async (locationUser) => {
  const query = qs.stringify(locationUser);

  try {
    const { data } = await axios.get(
      `${apiUrl}maps/places/findNearbyOffice?${query}`
    );
    return data.data.candidates;
  } catch (error) {
    console.log(error);
  }
};

export const axiosIssue = async (issue) => {
  try {
    const { data } = await axios.post(`${apiUrl}cases/newCase`, issue);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const axiosGetUrl = async (base64) => {
  try {
    const { data } = await axios.post(`${apiUrl}images/urlImage`, {
      image: base64,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const axiosAllOffices = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}offices/all`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const axiosSendNewOffices = async (offices) => {
  try {
    const newFormatOffices = offices.map((office) => {
      if (office.opening_hours === undefined)
        office.opening_hours = { open_now: false };
      return {
        name: office.name,
        address: office.formatted_address,
        open_now: office.opening_hours.open_now,
        location: [office.geometry.location.lat, office.geometry.location.lng],
        rating: office.rating,
      };
    });

    const { data } = await axios.post(
      `${apiUrl}offices/create`,
      newFormatOffices
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
