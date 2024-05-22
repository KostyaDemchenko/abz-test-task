import React from "react";
import Image from "next/image";

import Button from "@/components/Button";

import logo from "@/public/logo.svg";

import "./style.scss";

interface ButtonProps {
  children: React.ReactNode;
}

const Headder = () => {
  return (
    <header>
      <Image src={logo} alt='logo' />
      <div className='btn-box'>
        <Button>Users</Button>
        <Button>Sign up</Button>
      </div>
    </header>
  );
};

export default Headder;
