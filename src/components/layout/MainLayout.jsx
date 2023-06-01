import { Helmet } from "react-helmet";
import "./MainLayout.module.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
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
      {inLoginOrRegister && <Navbar />}
      <Box height={"80vh"}>{children}</Box>

      <Footer />
    </>
  );
};
