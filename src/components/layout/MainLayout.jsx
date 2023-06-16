import { Helmet } from "react-helmet";
import "./MainLayout.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

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

        <Box marginTop={"80px"} flexGrow={1} height={"100%"}>
          {children}
        </Box>

        <Footer />
      </Box>
    </>
  );
};
