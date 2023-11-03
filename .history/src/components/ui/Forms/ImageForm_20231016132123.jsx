import React from "react";

const ImageFileInput = ({ onFilesChange, ...props }) => {
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
      {...props}
    />
  );
};
export default ImageFileInput;
