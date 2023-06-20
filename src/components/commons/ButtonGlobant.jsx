import { Button, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

const ButtonGlobant = ({ children, props, type }) => {
  const theme = useTheme();

  const colorButtonDefault = theme.palette.primary.main;
  const colorButtonSuccess = theme.palette.success.main;
  const colorButtonError = theme.palette.error.main;
  const colorButtonPending = theme.palette.pending.main;

  const styleDefault = {
    margin: 1,
    color: colorButtonDefault,
    fontWeight: "bold",
    backgroundColor: "transparent",
    borderRadius: "20px",
    border: `solid 0.1rem ${colorButtonDefault}`,
    width: { xs: "250px", sm: "300px", md: "380px" },

    "&:hover": {
      color: "white",
      backgroundColor: colorButtonDefault,
      scale: 1.1,
    },
  };

  const styleSuccess = {
    margin: 1,
    color: colorButtonSuccess,
    fontWeight: "bold",
    backgroundColor: "transparent",
    borderRadius: "20px",
    border: `solid 0.1rem ${colorButtonSuccess}`,
    width: { xs: "250px", sm: "300px", md: "380px" },

    "&:hover": {
      color: "black",
      backgroundColor: colorButtonSuccess,
    },
  };

  const styleError = {
    margin: 1,
    color: colorButtonError,
    fontWeight: "bold",
    backgroundColor: "transparent",
    borderRadius: "20px",
    border: `solid 0.1rem ${colorButtonError}`,
    width: { xs: "250px", sm: "300px", md: "380px" },

    "&:hover": {
      color: "white",
      backgroundColor: colorButtonError,
    },
  };

  const stylePending = {
    margin: 1,
    color: colorButtonPending,
    fontWeight: "bold",
    backgroundColor: "transparent",
    borderRadius: "20px",
    border: `solid 0.1rem ${colorButtonPending}`,
    width: { xs: "250px", sm: "300px", md: "380px" },

    "&:hover": {
      color: "white",
      backgroundColor: colorButtonPending,
    },
  };

  const [styleTypeButton, setStyleTypeButton] = useState(styleDefault);

  useEffect(() => {
    selectTypeButton();
  }, []);

  const selectTypeButton = () => {
    switch (type) {
      case "success":
        setStyleTypeButton(styleSuccess);
        break;
      case "error":
        setStyleTypeButton(styleError);
        break;
      case "pending":
        setStyleTypeButton(stylePending);
        break;
    }
  };

  return (
    <Button {...props} sx={styleTypeButton}>
      {children}
    </Button>
  );
};
export default ButtonGlobant;
