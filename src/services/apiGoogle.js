import axios from "axios";

const API_KEY_GOOGLE = "AIzaSyDyS4HmRowI8sqVbmbtUunQf-BClJ8xEI0";
const API_URL = "https://maps.googleapis.com/maps/api";

export const getLocationNearbyOffice = async ({ latitude, longitude }) => {
  try {
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&input=Globant&inputtype=textquery&locationbias=rectangle:-38.002,-57.5531|-38.002,-57.5531&key=AIzaSyDyS4HmRowI8sqVbmbtUunQf-BClJ8xEI0`,
      { withCredentials: true }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

//${API_URL}/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&input=Globant&inputtype=textquery&locationbias=rectangle:${latitude},${longitude}|${latitude},${longitude}&key=${API_KEY_GOOGLE}
