import React from "react";

const ImageFileInput = ({ onFilesChange }) => {
  return (
    <input
      type="file"
      accept="image/*"
      onChange={(e) => {
        const fileList = e.target.files;
        if (fileList) {
          const files = [...fileList];
          onFilesChange(files);
        }
      }}
      className="bg-gray-100"
    />
  );
};
export default ImageFileInput;
