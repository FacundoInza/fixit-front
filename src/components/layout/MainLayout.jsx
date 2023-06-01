import { Helmet } from "react-helmet";
import "./MainLayout.module.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { useSelector } from "react-redux";

export const MainLayout = ({ title = "FixIt", children }) => {
  const actualUser = useSelector((state) => state.user);
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {/* {actualUser.email && <Navbar />} */}
      {/* Navbar */}
      {children}
      <Footer />
    </>
  );
};
