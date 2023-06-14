import {
  createAsyncThunk,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";

// Acción para establecer los dispositivos
export const setDevices = createAction("SET_DEVICES");

// Acción asincrónica para obtener los dispositivos de la base de datos
export const fetchDevices = createAsyncThunk("FETCH_DEVICES", async () => {
  const response = await axios.get(`${apiUrl}devices/all`); // Endpoint para obtener los dispositivos desde tu backend
  return response.data.devices; // Suponiendo que la respuesta contiene una propiedad 'devices' con la lista de dispositivos
});

const initialState = [];

// Reductor para manejar las acciones
export const deviceReducer = createReducer(initialState, (builder) => {
  builder.addCase(setDevices, (state, action) => {
    return action.payload; // Establecer los dispositivos en el estado
  });
});

// Exporta una acción que combina la acción asincrónica 'fetchDevices' con la acción 'setDevices'
export const fetchAndSetDevices = () => async (dispatch) => {
  try {
    const devices = await dispatch(fetchDevices());
    dispatch(setDevices(devices));
  } catch (err) {
    console.log(err);
  }
};
