import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startUploadImage } from "../../../redux/uiSlice/thunk";

export const ImageForm = ({ setValue, name, text, data = [], errors }) => {
  const dispatch = useDispatch();
  const [images, setImages] = useState(null);

  const handleAddDocuments = async (event) => {
    const file = await dispatch(startUploadImage(event.target.files[0], name));
    setValue(name, file);
    setImages(file);
  };
  return (
    <>
      <div>{text}</div>
      <div>
        <input
          id={name}
          className="invisible absolute"
          type="file"
          onChange={handleAddDocuments}
        />
      </div>
      <label htmlFor={name} className="cursor-pointer">
        {Boolean(images != null || data.length) ? (
          <img src={images ?? data} width={200} />
        ) : (
          <>
            <div>
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width={80}
                height={80}
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
            </div>
            <div>Subir Archivo</div>
          </>
        )}
      </label>
      {errors[name] && (
        <p className="text-danger">{errors[name]?.message}*</p>
      )}
    </>
  );
};
