import { Helmet } from "react-helmet";
import "./MainLayout.module.css";
export const MainLayout = ({ title = "FixIt", children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {/* Navbar */}
      {/* Sidebar */}
      {children}
      {/* Footer */}
    </>
  );
};
