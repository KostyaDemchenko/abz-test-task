import React from "react";

import "./style.scss";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
