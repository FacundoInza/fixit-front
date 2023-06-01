import { Button, useTheme } from "@mui/material";

const ButtonGlobant = ({ children }) => {
  const theme = useTheme();

  const colorButton = theme.palette.primary.main;
  return (
    <Button
      sx={{
        color: colorButton,
        fontWeight: "bold",
        backgroundColor: "transparent",
        borderRadius: "20px",
        border: `solid 0.1rem ${colorButton}`,
        width: "30%",
        margin: "15px",
        "&:hover": {
          color: "white",
          backgroundColor: colorButton,
        },
      }}
    >
      {children}
    </Button>
  );
};
export default ButtonGlobant;
