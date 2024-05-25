import React, { useState } from "react";
import ".././style.scss";

interface NameInputProps {
  placeholder: string;
  children?: React.ReactNode;
}

const NameInput = ({ placeholder }: NameInputProps) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 2 || value.length > 60) {
      setError("Username must be between 2 and 60 characters.");
    } else {
      setError("");
    }
    setUsername(value);
  };

  return (
    <div className='input-container'>
      <input
        type='text'
        placeholder={placeholder}
        value={username}
        onChange={handleInputChange}
        required
      />
      {error && <p className='error'>{error}</p>}
    </div>
  );
};

export default NameInput;
