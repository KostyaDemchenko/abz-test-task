import React from "react";

import "./style.scss";

interface CardProps {
  personImage: string;
  personName: string;
  personPosition: string;
  personEmail: string;
  personPhone: string;
}

const Button = ({
  personImage,
  personName,
  personPosition,
  personEmail,
  personPhone,
}: CardProps) => {
  return (
    <div className='peron-card'>
      <img src={personImage} alt={personName} className='person-image' />
      <h4 className='person-name' title={personName}>
        {personName}
      </h4>
      <div className='person-info-box'>
        <p className='person-position' title={personPosition}>
          {personPosition}
        </p>
        <p className='person-email' title={personEmail}>
          {personEmail}
        </p>
        <p className='person-phone' title={personPhone}>
          {personPhone}
        </p>
      </div>
    </div>
  );
};

export default Button;
