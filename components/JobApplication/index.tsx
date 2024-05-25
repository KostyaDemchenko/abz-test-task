// @/components/EmployeesList/index.tsx
import React, { useEffect, useState } from "react";

// importing components
import Button from "@/components/Button";
import NameInput from "@/components/Inputs/NameInput";
import EmailInput from "@/components/Inputs/EmailInput";
import PhoneInput from "@/components/Inputs/PhoneInput";
import PositionList from "@/components/PostionsList";
import FileInput from "@/components/FileInput";

import "./style.scss";

const JobApplication: React.FC = () => {
  return (
    <div className='job-application-container container'>
      <h2 className='section-title'>Working with POST request</h2>
      <form action='' className='job-application-form'>
        <div className='select-container'>
          <div className='inputs-container'>
            <NameInput placeholder='Your name' />
            <EmailInput placeholder='Email' />
            <PhoneInput placeholder='Phone' />
            <p className='clue'>+38 (XXX) XXX - XX - XX</p>
          </div>
          <div className='job-aplication-type'>
            <PositionList />
          </div>
          <FileInput />
        </div>
        <Button onClick={() => {}}>Sign up</Button>
      </form>
    </div>
  );
};

export default JobApplication;
