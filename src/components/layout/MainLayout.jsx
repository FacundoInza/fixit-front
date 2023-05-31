import { Helmet } from "react-helmet";

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
