import React, { useRef } from "react";
import { Col, FormLabel, Button } from "react-bootstrap";
import { Controller, useFieldArray } from "react-hook-form";
import { useDispatch } from "react-redux";
import { startUploadImage } from "../../../redux/uiSlice/thunk";

export const ImageForm = ({ control, nameFile }) => {
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
