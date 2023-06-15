import React, { useRef, useEffect, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import { MainLayout } from "../../layout/MainLayout";
import { Box, Typography } from "@mui/material";
import ButtonGlobant from "../../commons/ButtonGlobant";
import { updateIssue } from "../../../store/issue";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { axiosGetUrl } from "../../../services/api";

const ObjectDetectionComponent = () => {
  const Navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const [detectedObject, setDetectedObject] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const { damaged_equipment } = useSelector((state) => state.issue);
  const devices = useSelector((state) => state.devices);
  console.log(devices);

  useEffect(() => {
    const runObjectDetection = async () => {
      const model = await cocoSsd.load();

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });

        videoRef.current.srcObject = stream;
      }

      const detectObjects = async () => {
        if (model && videoRef.current.readyState === 4) {
          const officeObjects = ["mouse", "headset", "charger", "cell phone"];
          const predictions = await model.detect(videoRef.current);
          const detectedOfficeObject = predictions.find((prediction) =>
            officeObjects.includes(prediction.class)
          );

          if (detectedOfficeObject) {
            setDetectedObject(detectedOfficeObject);

            console.log("Objeto detectado:", detectedOfficeObject.class);

            captureImage();
          }

          if (detectedOfficeObject) {
            const stream = videoRef.current.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach((track) => track.stop());
          }
        }

        requestAnimationFrame(detectObjects);
      };

      setTimeout(detectObjects, 3000);
    };

    runObjectDetection();
  }, []);

  const captureImage = async () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    context.drawImage(
      videoRef.current,
      0,
      0,
      videoRef.current.videoWidth,
      videoRef.current.videoHeight
    );

    const image = new Image();
    image.src = canvas.toDataURL();
    setCapturedImage(image);

    const base64Data = image.src;

    let base64WithoutPrefix = base64Data.replace(
      /^data:image\/\w+;base64,/,
      ""
    );
    console.log(base64WithoutPrefix);
    const url = await axiosGetUrl(base64WithoutPrefix);
    setUrl(url);
  };

  const handleSelectFromList = () => {
    dispatch(
      updateIssue({
        damaged_equipment: {
          ...damaged_equipment,

          image: url,
        },
      })
    );
    Navigate("/device-list");
  };

  const handleScanAgain = () => {
    window.location.reload();
    //Navigate("/start-scan");
  };

  const handleConfirmObject = () => {
    console.log(url);
    dispatch(
      updateIssue({
        damaged_equipment: {
          ...damaged_equipment,
          name: detectedObject.class,
          image: url,
        },
      })
    );

    Navigate("/description");
  };

  return (
    <MainLayout title="Scanner" inLoginOrRegister={true}>
      <div style={{ maxHeight: "calc(100vh - 250px)", overflowY: "auto" }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          overflow="overflow"
          mt={-5}
        >
          <Box>
            {capturedImage ? (
              <img
                src={capturedImage.src}
                alt="Captured"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : (
              <video
                ref={videoRef}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                autoPlay
              ></video>
            )}
            <canvas
              ref={canvasRef}
              style={{ display: "none" }}
              width={videoRef.current ? videoRef.current.videoWidth : 640}
              height={videoRef.current ? videoRef.current.videoHeight : 480}
            ></canvas>
            <Box
              position="relative"
              top={5}
              left={0}
              right={0}
              textAlign="center"
              margin="0 auto"
              paddingTop={2}
              width="75%"
            >
              {!detectedObject && (
                <Typography variant="body1" marginBottom={2} fontWeight="bold">
                  scaning on course...
                </Typography>
              )}
            </Box>
          </Box>

          {detectedObject && (
            <Box
              position="relative"
              top={5}
              left={0}
              right={0}
              textAlign="center"
              margin="0 auto"
              paddingTop={2}
              width="75%"
            >
              <Typography variant="body1" marginBottom={2} fontWeight="bold">
                Are you trying to report damage to your {detectedObject.class}?
              </Typography>
            </Box>
          )}

          {detectedObject && (
            <Box
              position="relative"
              display="flex"
              flexDirection="column"
              alignItems="center"
              margin={"0 auto"}
              marginTop={3}
              width="75%"
            >
              <Box width="100%" mb={1}>
                <ButtonGlobant
                  props={{ onClick: handleScanAgain }}
                  width="100%"
                >
                  No, scan again
                </ButtonGlobant>
              </Box>
              <Box width="100%" mb={1}>
                <ButtonGlobant props={{ onClick: handleSelectFromList }}>
                  No, select item from a list
                </ButtonGlobant>
              </Box>
              <Box width="100%" mb={1}>
                <ButtonGlobant
                  props={{ onClick: handleConfirmObject, width: "100%" }}
                >
                  Confirm
                </ButtonGlobant>
              </Box>
            </Box>
          )}
        </Box>
      </div>
    </MainLayout>
  );
};

export default ObjectDetectionComponent;
