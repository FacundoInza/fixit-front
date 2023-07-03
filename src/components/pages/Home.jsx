import { Box, Typography } from "@mui/material";
import { MainLayout } from "../layout/MainLayout";
import VectorHome from "../commons/VectorHome";
import style from "./Home.module.css";
import ButtonGlobant from "../commons/ButtonGlobant";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <MainLayout title="Home Page">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Cambiar "justifyItems" por "justifyContent"
          alignItems: "center",
          height: "80vh", // Cambiar "height: '100%'" por "height: '100vh'"
          zIndex: 9999,
          overflow: "hidden",
        }}
      >
        <VectorHome />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // Cambiar "alignItems: 'home'" por "alignItems: 'center'"
            flexDirection: "column",
          }}
        >
          <div className={`${style["globant-image"]}`}></div>
          <Typography
            margin={2}
            variant="h5"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" } }}
          >
            Welcome to Fix It
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" } }}
          >
            Fix It: Empower Your Workspace, Solve with Ease!
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" } }}
          >
            If you want to report your issue, please log in below
          </Typography>
          <Box
            mt={3}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Link to="/login">
              <ButtonGlobant type={"success"}>Log in</ButtonGlobant>
            </Link>

            <Link to="/signUp">
              <ButtonGlobant>Sign Up</ButtonGlobant>
            </Link>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};
export default Home;
