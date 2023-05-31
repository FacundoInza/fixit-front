import { createTheme } from "@mui/material";

const GlobantTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#BFD732", // Color primario
      light: "#FFFFFF", // Tono claro del color primario
      dark: "#444444", // Tono oscuro del color primario
    },
    // Otros colores
    error: {
      main: "#9E005D", // Color para indicar errores
    },
    pending: {
      main: "#666666", // Color para indicar advertencias
    },
    success: {
      main: "#00A99D", // Color para indicar éxito
    },
  },
});

export default GlobantTheme;
