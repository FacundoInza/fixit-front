import React, { useRef, useEffect, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import { MainLayout } from "../../layout/MainLayout";
import { Box, Card, CardContent, Typography } from "@mui/material";
import ButtonGlobant from "../../commons/ButtonGlobant";

const ObjectDetectionComponent = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [detectedObject, setDetectedObject] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);

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
            console.log("Objeto detectado:", detectedOfficeObject);

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

  const captureImage = () => {
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
    console.log("URL de la imagen capturada:", image.src);
  };

  const handleConfirmObject = () => {
    if (detectedObject) {
      console.log("Objeto detectado:", detectedObject);
    } else {
      console.log("Ningún objeto detectado");
    }
  };

  return (
    <MainLayout title="Scanner" inLoginOrRegister={true}>
      <div style={{ maxHeight: "calc(100vh - 250px)", overflowY: "auto" }}>
        <Box
          position="relative"
          minHeight="100vh"
          textAlign="center"
          paddingTop={0}
        >
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
              marginTop={5}
              width="75%"
              padding={2}
            >
              <ButtonGlobant
                onClick={handleConfirmObject}
                marginBottom={0}
                width="100%"
              >
                No, scan again
              </ButtonGlobant>
              <ButtonGlobant
                onClick={handleConfirmObject}
                marginBottom={1}
                width="100%"
              >
                No, select item from a list
              </ButtonGlobant>
              <ButtonGlobant onClick={handleConfirmObject} width="100%">
                Confirm
              </ButtonGlobant>
            </Box>
          )}
        </Box>
      </div>
    </MainLayout>
  );
};

export default ObjectDetectionComponent;
