import { MainLayout } from "../../layout/MainLayout";
import { Box, Typography } from "@mui/material";
import ButtonGlobant from "../../commons/ButtonGlobant";
import image from "../../../assets/Rectangle 23 1.png";
import { Link } from "react-router-dom";
const StartScan = () => {
  return (
    <MainLayout title="start-scan" inLoginOrRegister={true}>
      <div
        mb={2}
        style={{ maxHeight: "calc(100vh - 250px)", overflowY: "auto" }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          overflow="overflow"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            flexDirection="column"
            height="100%"
          >
            <Typography variant="body1" sx={{ mb: 2, mt: 3 }} fontWeight="bold">
              Capture an Image
            </Typography>
            <Typography>
              Let Image Recognition Identify the Damaged Item!
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }} fontWeight="bold">
              Make sure there are no other items in the image.
            </Typography>
          </Box>
          <Box
            sx={{
              height: "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={image}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              alt="Image"
            />
          </Box>

          <Box width="50%" marginTop={3}>
            <Link to={"/scanner"}>
              <ButtonGlobant>Scan Item</ButtonGlobant>
            </Link>
          </Box>
        </Box>
      </div>
    </MainLayout>
  );
};

export default StartScan;
