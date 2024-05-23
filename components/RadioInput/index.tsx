import "./style.scss";

interface RadioButtonProps {
  id: string;
  label: string;
  name: string;
  value: string;
}

interface RadioButtonGroupProps {
  group: RadioButtonProps[];
  title?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  label,
  name,
  value,
}) => {
  return (
    <label htmlFor={id} className='radiobutton-label'>
      <input
        className='radiobutton-input'
        type='radio'
        name={name}
        id={id}
        value={value}
      />
      <span className='custom-radiobutton' />
      {label}
    </label>
  );
};

const RadioGroup: React.FC<RadioButtonGroupProps> = ({ group, title }) => {
  return (
    <div className='radiobutton-container'>
      {title && <label>{title}</label>}
      <div className='radiobutton-group'>
        {group.map((el, idx) => {
          return (
            <RadioButton
              key={idx}
              id={el.id}
              label={el.label}
              name={el.name}
              value={el.value}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RadioGroup;
