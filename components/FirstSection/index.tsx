import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import Preloader from "@/components/Preloader";
import "./style.scss";

const FirstSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className='cover'>
          <div className='box'>
            <div className='text-container'>
              <h1>Test assignment for front-end developer</h1>
              <p>
                What defines a good front-end developer is one that has skilled
                knowledge of HTML, CSS, JS with a vast understanding of User
                design thinking as they'll be building web interfaces with
                accessibility in mind. They should also be excited to learn, as
                the world of Front-End Development keeps evolving.
              </p>
            </div>
            <Button onClick={() => {}}>Sign up</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default FirstSection;
