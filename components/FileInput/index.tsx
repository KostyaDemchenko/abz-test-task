import React, { useState, useRef, ChangeEvent } from "react";
import "./style.scss";

const FileUpload: React.FC = () => {
  const [fileName, setFileName] = useState<string>("Upload your photo");
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];

      // Check file size (max 5 MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("File size must not be greater than 5 MB.");
        setFileName("Upload your photo");
        return;
      }

      // Check file type (jpeg/jpg)
      if (!["image/jpeg", "image/jpg"].includes(file.type)) {
        setError("File format must be jpeg/jpg.");
        setFileName("Upload your photo");
        return;
      }

      // Check file dimensions
      const img = new Image();
      img.onload = () => {
        if (img.width < 70 || img.height < 70) {
          setError("Photo dimensions must be at least 70x70 pixels.");
          setFileName("Upload your photo");
        } else {
          setError("");
          setFileName(file.name);
        }
      };
      img.onerror = () => {
        setError("Invalid image file.");
        setFileName("Upload your photo");
      };
      img.src = URL.createObjectURL(file);
    } else {
      setFileName("Upload your photo");
      setError("");
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
          accept='.jpg,.jpeg'
          style={{ display: "none" }}
          required
        />
      </div>
      {error && <p className='error'>{error}</p>}
    </div>
  );
};

export default FileUpload;
