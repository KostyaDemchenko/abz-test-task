import React, { useState } from "react";
import ".././style.scss";

interface PhoneInputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhoneInput = ({ placeholder, onChange }: PhoneInputProps) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const validatePhone = (phone: string) => {
    const regex = /^\+?380[0-9]{9}$/;
    return regex.test(phone);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!validatePhone(value)) {
      setError("Please enter a valid phone number starting with +380.");
    } else {
      setError("");
    }
    setPhone(value);
    onChange(e); // Call the parent's onChange handler
  };

  return (
    <div className='input-container phone'>
      <input
        type='tel'
        placeholder={placeholder}
        value={phone}
        onChange={handleInputChange}
        required
      />
      <p className='clue'>+38 (XXX) XXX - XX - XX</p>
      {error && <p className='error'>{error}</p>}
    </div>
  );
};

export default PhoneInput;
