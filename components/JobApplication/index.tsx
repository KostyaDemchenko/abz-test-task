import React, { useEffect, useState } from "react";
import axios from "axios";

// Importing components
import Button from "@/components/Button";
import NameInput from "@/components/Inputs/NameInput";
import EmailInput from "@/components/Inputs/EmailInput";
import PhoneInput from "@/components/Inputs/PhoneInput";
import PositionList from "@/components/PostionsList";
import FileInput from "@/components/FileInput";
import SuccessfullRegister from "@/components/SuccessfullRegister";
import Preloader from "@/components/Preloader";

import "./style.scss";

const JobApplication: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [positionId, setPositionId] = useState<number | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [token, setToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // Added loading state
  const [registrationSuccess, setRegistrationSuccess] =
    useState<boolean>(false); // Added registration success state

  useEffect(() => {
    // Fetch the token
    axios
      .get("https://frontend-test-assignment-api.abz.agency/api/v1/token")
      .then((response) => {
        if (response.data.success) {
          setToken(response.data.token);
        }
      });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !positionId || !photo) {
      alert("All fields are required!");
      return;
    }

    setLoading(true); // Set loading to true when form is submitted

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position_id", positionId.toString());
    formData.append("photo", photo);

    axios
      .post(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        formData,
        {
          headers: {
            Token: token,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setLoading(false); // Set loading to false when request is completed
        if (response.data.success) {
          // Display success message
          setRegistrationSuccess(true);
        }
      })
      .catch((error) => {
        setLoading(false); // Set loading to false in case of error
        if (error.response) {
          alert(`Error: ${error.response.data.message}`);
        } else {
          alert("An error occurred during the registration process.");
        }
      });
  };

  return (
    <div className='job-application-container container'>
      <h2 className='section-title'>Working with POST request</h2>
      {registrationSuccess ? ( // Show SuccessfullRegister component if registration is successful
        <SuccessfullRegister />
      ) : loading ? ( // Show preloader if loading is true
        <Preloader />
      ) : (
        <form onSubmit={handleSubmit} className='job-application-form'>
          <div className='select-container'>
            <div className='inputs-container'>
              <NameInput
                placeholder='Your name'
                onChange={(e) => setName(e.target.value)}
              />
              <EmailInput
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <PhoneInput
                placeholder='Phone'
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className='job-aplication-type'>
              <PositionList onSelect={(id) => setPositionId(id)} />
            </div>
            <FileInput onFileSelect={(file) => setPhoto(file)} />
          </div>
          <Button type='submit'>Sign up</Button>
        </form>
      )}
    </div>
  );
};

export default JobApplication;
