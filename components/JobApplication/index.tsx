// @/components/EmployeesList/index.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

// importing components
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import RadioGroup from "@/components/RadioInput";
// import Input from "@/components/InputEmailType";

import "./style.scss";

const JobApplication: React.FC = () => {
  return (
    <div className='job-application-container container'>
      <h2 className='section-title'>Working with POST request</h2>
      <form action='' className='job-application-form'>
        <TextInput inputType='text' placeholder='Your name' />
        <TextInput inputType='email' placeholder='Email' />
        <TextInput inputType='phone' placeholder='Phone' />
        <div className='job-aplication-type'>
          <RadioGroup
            title='Select your position'
            group={[
              {
                name: "music_type",
                id: "Album",
                label: "Album",
                value: "album",
              },
              {
                name: "music_type",
                id: "Single",
                label: "Single",
                value: "single",
              },
            ]}
          />
        </div>
        <Button onClick={() => {}}>Sign up</Button>
      </form>
    </div>
  );
};

export default JobApplication;
