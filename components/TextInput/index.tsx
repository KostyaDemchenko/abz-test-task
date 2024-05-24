import React from "react";

import "./style.scss";

interface TextInputProps {
  inputType: string;
  placeholder: string;
  children?: React.ReactNode;
}

const TextInput = ({ inputType, placeholder }: TextInputProps) => {
  return <input type={inputType} placeholder={placeholder} required />;
};

export default TextInput;
