// components/FileUpload.tsx

import React, { useState, useRef, ChangeEvent } from "react";

import "./style.scss";

const FileUpload: React.FC = () => {
  const [fileName, setFileName] = useState<string>("Upload your photo");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const name = files[0].name;
      setFileName(name);
    } else {
      setFileName("Upload your photo");
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className={`file-upload ${
        fileName !== "Upload your photo" ? "active" : ""
      }`}
    >
      <div className='file-select'>
        <div className='file-select-button' onClick={handleClick}>
          Upload
        </div>
        <div className='file-select-name'>{fileName}</div>
        <input
          type='file'
          name='chooseFile'
          id='chooseFile'
          ref={fileInputRef}
          onChange={handleFileChange}
          accept='.jpg,.jpeg,.png,.webp,.tiff'
          style={{ display: "none" }}
          required
        />
      </div>
    </div>
  );
};

export default FileUpload;
