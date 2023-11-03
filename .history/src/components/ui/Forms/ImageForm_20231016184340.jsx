import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startUploadImage } from "../../../redux/uiSlice/thunk";

export const ImageForm = ({ setValue, name, text, data }) => {
  const dispatch = useDispatch();
  const [images, setImages] = useState(null);

  const handleAddDocuments = async (event) => {
    const file = await dispatch(startUploadImage(event.target.files[0]));
    setValue(name, file);
    setImages(file);
  };

  return (
    <>
      <label>{text}</label>
      <div>
        <input type="file" onChange={handleAddDocuments} />
      </div>
      <div>
        <img src={images ?? data} width={200} />
      </div>
    </>
  );
};
