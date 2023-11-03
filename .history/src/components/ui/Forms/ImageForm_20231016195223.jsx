import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startUploadImage } from "../../../redux/uiSlice/thunk";

export const ImageForm = ({ setValue, name, text, data }) => {
  const dispatch = useDispatch();
  const [images, setImages] = useState(null);

  const handleAddDocuments = async (event) => {
    const file = await dispatch(startUploadImage(event.target.files[0], name));
    setValue(name, file);
    setImages(file);
  };

  return (
    <>
      <div>
        <input id={name} type="file" onChange={handleAddDocuments} />
      </div>
      <label htmlFor={name} pointer>
        <img src={images ?? data} width={200} />
      </label>
    </>
  );
};
