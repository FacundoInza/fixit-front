import { Avatar } from "@mui/material";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonGlobant from "../../commons/ButtonGlobant";
import { axiosGetUrl, axiosUpdateUser } from "../../../services/api";
import { updateUser } from "../../../store/users";
import { base64Data } from "../../../utils";

function FunctionalAvatar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const fileInputRef = useRef(null);

  const getInitials = (name) => {
    const names = name.split(" ");
    return names.map((n) => n.charAt(0)).join("");
  };

  const initials = getInitials(user.name);

  const base64image = base64Data(selectedImage);

  const handleEditImage = async () => {
    const imageUrl = await axiosGetUrl(base64image);
    if (isEditMode) {
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
    backgroundImage: selectedImage ? `url(${selectedImage})` : "none",
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
          {!selectedImage && initials}
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
