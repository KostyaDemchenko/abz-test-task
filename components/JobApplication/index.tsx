// @/components/EmployeesList/index.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

// importing components
import Button from "@/components/Button";
// import InputTextType from "@/components/InputTextType";
// import Input from "@/components/InputEmailType";

import "./style.scss";

const JobApplication: React.FC = () => {
  return (
    <div className='job-application-container container'>
      <h2 className='section-title'>Working with POST request</h2>
      <form action=''>
        <input type='text' placeholder='Your name' />
        <input type='email' placeholder='Email' />
        <input type='phone' placeholder='Phone' />
        {/* <div className="job-aplication-type">
          <p>Select your position</p>
        </div> */}
        <Button onClick={() => {}}>Sign up</Button>
      </form>
    </div>
  );
};

export default JobApplication;
