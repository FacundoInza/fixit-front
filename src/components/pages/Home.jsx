import { Box, Typography } from "@mui/material";
import { MainLayout } from "../layout/MainLayout";
import VectorHome from "../commons/VectorHome";
import style from "./Home.module.css";
import ButtonGlobant from "../commons/ButtonGlobant";

const Home = () => {
  return (
    <MainLayout title="Home Page">
      <VectorHome />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          zIndex: 9999,
          overflow: "hidden",
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
          If you want repor your issue, you must be logged !
        </Typography>
        <ButtonGlobant>Log in</ButtonGlobant>
        <Typography sx={{ color: (theme) => theme.palette.primary.main }}>
          Register !
        </Typography>
      </Box>
    </MainLayout>
  );
};
export default Home;
