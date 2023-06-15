import { Avatar } from "@mui/material";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonGlobant from "../../commons/ButtonGlobant";
import { axiosGetUrl, axiosUpdateUser } from "../../../services/api";
import { updateUser } from "../../../store/users";
import { convertBlobToBase64 } from "../../../utils";

function FunctionalAvatar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const fileInputRef = useRef(null);

  const handleEditImage = async () => {
    if (isEditMode) {
      const base64Data = await convertBlobToBase64(selectedImage);
      const base64WithoutPrefix = base64Data.replace(
        /^data:image\/\w+;base64,/,
        ""
      );
      const imageUrl = await axiosGetUrl(base64WithoutPrefix);
      await axiosUpdateUser({ image: imageUrl }, user.id);
      dispatch(updateUser({ image: imageUrl }));
      setIsEditMode(false);
    } else {
      fileInputRef.current.click();
      setIsEditMode(true);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const avatarStyle = {
    width: { xs: 120, sm: 160, md: 190 },
    height: { xs: 120, sm: 160, md: 190 },
    borderRadius: "50%",
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${user.image})`,
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <Avatar alt="User Avatar" sx={avatarStyle}>
          {!selectedImage}
        </Avatar>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ButtonGlobant props={{ type: "button", onClick: handleEditImage }}>
          {isEditMode ? "Save" : "Edit image"}
        </ButtonGlobant>
      </div>
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleImageChange}
      />
    </div>
  );
}

export default FunctionalAvatar;
