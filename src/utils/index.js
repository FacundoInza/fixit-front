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
