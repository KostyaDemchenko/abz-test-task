import React, { useState } from "react";
import ".././style.scss";

interface EmailInputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput = ({ placeholder, onChange }: EmailInputProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    // RFC2822 email validation regex
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
    setEmail(value);
    onChange(e); // Call the parent's onChange handler
  };

  return (
    <div className='input-container'>
      <input
        type='email'
        placeholder={placeholder}
        value={email}
        onChange={handleInputChange}
        required
      />
      {error && <p className='error'>{error}</p>}
    </div>
  );
};

export default EmailInput;
