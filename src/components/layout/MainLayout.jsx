import { Helmet } from "react-helmet";
import "./MainLayout.module.css";
import Footer from "../footer/Footer";
export const MainLayout = ({ title = "FixIt", children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {/* Navbar */}
      {/* Sidebar */}
      {children}
      <Footer />
    </>
  );
};
