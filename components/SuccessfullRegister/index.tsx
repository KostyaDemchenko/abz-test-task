import React from "react";
import Image from "next/image";

import successImage from "@/public/img/success-image.svg";

import "./style.scss";

const SuccessfullRegister = () => {
  return (
    <>
      <div className='container success'>
        <h3>User successfully registered</h3>
        <Image
          src={successImage}
          alt='successfull-register'
          width={328}
          height={290}
        />
      </div>
    </>
  );
};

export default SuccessfullRegister;
