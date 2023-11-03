import React from "react";
import { useDispatch } from "react-redux";
import { startUploadImage } from "../../../redux/uiSlice/thunk";

export const ImageForm = ({ setValue, nameFile }) => {
  const dispatch = useDispatch();

  const handleAddDocuments = async (event) => {
    const file = await dispatch(startUploadImage(event.target.files[0]));
    /* setValue(nameFile, file); */
    console.log(file);
  };

  return (
    <>
      <input type="file" onChange={handleAddDocuments} />
    </>
  );
};
