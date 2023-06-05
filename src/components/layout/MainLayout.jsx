import { Helmet } from "react-helmet";
import "./MainLayout.module.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";

export const MainLayout = ({
  title = "FixIt",
  children,
  inLoginOrRegister = false,
}) => {
  const actualUser = useSelector((state) => state.user);
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Box display="flex" flexDirection="column" minHeight="100vh">
        {inLoginOrRegister && <Navbar />}

        <Box
          flexGrow={1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {children}
        </Box>

        <Footer />
      </Box>
    </>
  );
};
