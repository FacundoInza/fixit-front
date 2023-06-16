import { Button, useTheme } from "@mui/material";

const ButtonGlobant = ({ children, props }) => {
  const theme = useTheme();

  const colorButton = theme.palette.primary.main;
  return (
    <Button
      {...props}
      sx={{
        margin: 2,
        color: colorButton,
        fontWeight: "bold",
        backgroundColor: "transparent",
        borderRadius: "20px",
        border: `solid 0.1rem ${colorButton}`,
        width: { xs: "250px", sm: "300px", md: "380px" },

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
