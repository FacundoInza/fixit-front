import { Box, Container, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import style from "./Footer.module.css";
import ButtonGlobant from "../commons/ButtonGlobant";

const Footer = () => {
  const user = useSelector((state) => state.user);

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.primary.dark,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "0px",
        width: "100vw",
        height: "100px",
        bottom: 0,
        left: 0,
        margin: "0px",
        position: "fixed",
      }}
    >
      <Box width={"100%"} sx={{ flexGrow: 1, justifyContent: "center" }}>
        <Stack direction="column" spacing={1} alignItems="center">
          <ButtonGlobant>Log in</ButtonGlobant>
          <Typography sx={{ color: (theme) => theme.palette.primary.main }}>
            Register !
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};
export default Footer;
