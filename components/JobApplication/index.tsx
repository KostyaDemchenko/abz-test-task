// @/components/EmployeesList/index.tsx
import React, { useEffect, useState } from "react";

// importing components
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import PositionList from "@/components/PostionsList";
import FileInput from "@/components/FileInput";

import "./style.scss";

const JobApplication: React.FC = () => {
  return (
    <div className='job-application-container container'>
      <h2 className='section-title'>Working with POST request</h2>
      <form action='' className='job-application-form'>
        <div className='select-container'>
          <div className='input-container'>
            <TextInput inputType='text' placeholder='Your name' />
            <TextInput inputType='email' placeholder='Email' />
            <TextInput inputType='phone' placeholder='Phone' />
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
