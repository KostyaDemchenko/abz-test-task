import React from "react";
import "./style.scss";

interface RadioButtonProps {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface RadioButtonGroupProps {
  group: Omit<RadioButtonProps, "onChange">[];
  title?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <label htmlFor={id} className='radiobutton-label'>
      <input
        className='radiobutton-input'
        type='radio'
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required
      />
      <span className='custom-radiobutton' />
      {label}
    </label>
  );
};

const RadioGroup: React.FC<RadioButtonGroupProps> = ({
  group,
  title,
  onChange,
}) => {
  return (
    <div className='radiobutton-container'>
      {title && <p className='radiobutton-title'>{title}</p>}
      <div className='radiobutton-group'>
        {group.map((el, idx) => (
          <RadioButton
            key={idx}
            id={el.id}
            label={el.label}
            name={el.name}
            value={el.value}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
