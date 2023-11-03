import React from "react";
import { useDispatch } from "react-redux";
import { startUploadImage } from "../../../redux/uiSlice/thunk";

export const ImageForm = ({ setValue, nameFile }) => {
  const dispatch = useDispatch();

  const handleAddDocuments = (event) => {
    setValue(nameFile, dispatch(startUploadImage(event.target.files[0])));
  };

  return (
    <>
      <input type="file" onChange={handleAddDocuments} />
    </>
  );
};
