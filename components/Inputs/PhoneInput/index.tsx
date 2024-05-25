import React, { useState } from "react";
import ".././style.scss";

interface PhoneInputProps {
  placeholder: string;
  children?: React.ReactNode;
}

const PhoneInput = ({ placeholder }: PhoneInputProps) => {
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
  };

  return (
    <div className='input-container'>
      <input
        type='tel'
        placeholder={placeholder}
        value={phone}
        onChange={handleInputChange}
        required
      />
      {error && <p className='error'>{error}</p>}
    </div>
  );
};

export default PhoneInput;
