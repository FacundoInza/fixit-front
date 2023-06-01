import { Button, useTheme } from "@mui/material";

const ButtonGlobant = ({ children, props }) => {
  const theme = useTheme();

  const colorButton = theme.palette.primary.main;
  return (
    <Button
      {...props}
      sx={{
        color: colorButton,
        fontWeight: "bold",
        backgroundColor: "transparent",
        borderRadius: "20px",
        border: `solid 0.1rem ${colorButton}`,
        width: "100%",
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
