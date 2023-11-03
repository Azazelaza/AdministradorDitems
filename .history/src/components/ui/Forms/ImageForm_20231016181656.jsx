import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startUploadImage } from "../../../redux/uiSlice/thunk";

export const ImageForm = ({ setValue, nameFile }) => {
  const dispatch = useDispatch();
  const [images, setImages] = useState("");

  const handleAddDocuments = async (event) => {
    const file = await dispatch(startUploadImage(event.target.files[0]));
    setValue(nameFile, file);
    setImages(file);
  };

  return (
    <>
      <input type="file" onChange={handleAddDocuments} />
      <img src={images} />
    </>
  );
};
