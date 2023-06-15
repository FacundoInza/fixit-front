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
