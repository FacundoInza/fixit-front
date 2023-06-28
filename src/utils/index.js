import { SignalWifiStatusbarNullRounded } from "@mui/icons-material";
import axios from "axios";

const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      const geolocation = navigator.geolocation;

      const successCallback = (position) => {
        resolve(position);
      };

      const errorCallback = (error) => {
        reject(error);
      };

      const options = {
        enableHighAccuracy: true,
      };

      geolocation.getCurrentPosition(successCallback, errorCallback, options);
    } else {
      reject(new Error("Geolocation is not supported"));
    }
  });
};

// Uso de la función en un componente o en cualquier otro lugar
export async function getLocation() {
  try {
    const position = await getUserLocation();
    return { error: false, data: position };
  } catch (error) {
    console.log("Error:", error.message);
    return { error: true, data: error.message };
    // Maneja el error según corresponda
  }
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month < 10 ? "0" + month : month}/${year}`;
}

export async function convertBlobToBase64(selectedImage) {
  const { data } = await axios({
    method: "GET",
    url: selectedImage,
    responseType: "blob",
  });
  console.log("data", data);

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(data);
  });
}

export function findFalsyProperty(obj) {
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (!obj[key]) {
      return i;
    }

    if (typeof obj[key] === "object") {
      const nestedFalsyProperty = findFalsyProperty(obj[key]);
      if (nestedFalsyProperty !== -1) {
        return i;
      }
    }
  }

  return -1; // Si no se encuentra ninguna propiedad falsy
}

export function insertFalsyFromProperty(obj, property) {
  const newObj = { ...obj };
  const keys = Object.keys(obj);

  let startIndex = 0;

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === property) {
      startIndex = i;
      break;
    }
  }

  for (let j = startIndex; j < keys.length; j++) {
    const key = keys[j];

    if (typeof newObj[key] === "object" && newObj[key] !== null) {
      newObj[key] = insertFalsyFromProperty(newObj[key], property);
    } else {
      if (key !== "image") {
        newObj[key] = "";
      }
    }
  }

  return newObj;
}
