import { Button } from "@mui/material";

const ButtonGlobant = ({ children }) => {
  return (
    <Button
      sx={{
        color: "black",
        backgroundColor: (theme) => theme.palette.primary.main,
        borderRadius: "20px",
        width: "30%",
      }}
    >
      {children}
    </Button>
  );
};
export default ButtonGlobant;
