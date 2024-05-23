import React from "react";
import Image from "next/image";

import Button from "@/components/Button";

import logo from "@/public/logo.svg";

import "./style.scss";

const Headder = () => {
  return (
    <header>
      <div className='container'>
        <Image src={logo} alt='logo' />
        <div className='btn-box'>
          <Button onClick={() => {}}>Users</Button>
          <Button onClick={() => {}}>Sign up</Button>
        </div>
      </div>
    </header>
  );
};

export default Headder;
