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
import { image } from "@tensorflow/tfjs";
import { PrincipalFlowLayout } from "../../layout/PrincipalFlowLayout";

const ObjectDetectionComponent = () => {
  const Navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("");
  const [objectInCamera, setObjectInCamera] = useState("");
  const [detectedObject, setDetectedObject] = useState(null);
  const [modelStart, setModelStart] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const { damaged_equipment } = useSelector((state) => state.issue);
  const issue = useSelector((state) => state.issue);

  const devices = useSelector((state) => state.devices);

  useEffect(() => {
    dispatch(
      updateIssue({
        damaged_equipment: {
          ...damaged_equipment,
          name: detectedObject,
          image: imageUrl,
        },
      })
    );
  }, [imageUrl]);

  useEffect(() => {
    const runObjectDetection = async () => {
      const model = await cocoSsd.load();
      setModelStart(true);

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" },
          });

          videoRef.current.srcObject = stream;
        } catch (error) {
          Navigate("/device-list");
        }
      }

      const detectObjects = async () => {
        if (model && videoRef.current.readyState === 4) {
          const predictions = await model.detect(videoRef.current);

          console.log("predictions", predictions[0]);
          if (predictions[0] !== undefined)
            setObjectInCamera(predictions[0].class);

          const detectedOfficeObject = predictions.find((prediction) =>
            devices.includes(prediction.class)
          );

          if (detectedOfficeObject) {
            setDetectedObject(detectedOfficeObject.class);

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

    const imgurUrl = await axiosGetUrl(base64WithoutPrefix);
    setImageUrl(imgurUrl);
  };

  const handleSelectFromList = () => {
    Navigate("/device-list");
  };

  const handleScanAgain = () => {
    window.location.reload();
    //Navigate("/start-scan");
  };

  const handleConfirmObject = () => {
    Navigate("/description");
  };

  const handleGoBack = () => {
    Navigate("/device-list");
  };

  return (
    <PrincipalFlowLayout title="Scanner" inLoginOrRegister={true}>
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
            <div style={{ fontFamily: "Heebo, sans-serif" }}>
              {objectInCamera ? `We detect a ${objectInCamera}` : ""}
            </div>
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
              {!modelStart && (
                <Typography variant="body1" marginBottom={2} fontWeight="bold">
                  {
                    <h2 style={{ fontFamily: "Heebo, sans-serif" }}>
                      {" "}
                      Please wait for the scanner to start...
                    </h2>
                  }{" "}
                  {<br />}
                  {
                    <h3 style={{ fontFamily: "Heebo, sans-serif" }}>
                      This process can take a few seconds.
                    </h3>
                  }
                </Typography>
              )}
            </Box>
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
                <ButtonGlobant
                  type={"pending"}
                  props={{ onClick: handleGoBack }}
                >
                  SKIP and select from list
                </ButtonGlobant>
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
                Are you trying to report damage to your {detectedObject}?
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
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <ButtonGlobant
                  type={"success"}
                  props={{ onClick: handleConfirmObject, width: "100%" }}
                >
                  Confirm
                </ButtonGlobant>

                <ButtonGlobant
                  type={"error"}
                  props={{ onClick: handleScanAgain }}
                  width="100%"
                >
                  No, scan again
                </ButtonGlobant>

                <ButtonGlobant
                  type={"pending"}
                  props={{ onClick: handleSelectFromList }}
                >
                  No, select item from a list
                </ButtonGlobant>
              </Box>
            </Box>
          )}
        </Box>
      </div>
    </PrincipalFlowLayout>
  );
};

export default ObjectDetectionComponent;
