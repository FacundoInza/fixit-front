import { Box, Container, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import style from "./Footer.module.css";
import fullLogo from "../../assets/Globant-Original.png";

const Footer = () => {
  const user = useSelector((state) => state.user);

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.primary.dark,
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        marginRight: "0px",
        zIndex: "1",
        width: "100vw",
        height: "110px",
        margin: "0px",
        bottom: "0",
      }}
    >
      <Box
        width={"100%"}
        sx={{
          display: "inline-flex",
          justifyContent: "left",
        }}
      >
        <img
          src={fullLogo}
          alt="Logo"
          style={{ height: "30px", marginLeft: "20px", marginTop: "15px" }}
        />
        <Box flexDirection={"column"} marginLeft={"20px"}>
          <Typography fontSize={"12px"} color={"white"}>
            Contáctanos
          </Typography>
          <Typography fontSize={"12px"} color={"white"}>
            Escríbenos{" "}
          </Typography>
          <Typography fontSize={"12px"} color={"white"}>
            hi@globant.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
