import React from 'react';
import { func, string } from 'prop-types';

const TextBox = (props) => {
  const {
    name,
    className,
    type,
    placeholder,
    onChange,
    inputType,
    value,
  } = props;
  if (inputType === 'text') {
    return (
      <textArea
        className={className}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onBlur={(e) => onChange(e.target.value)}
        maxLength="200"
      />
    );
  } else {
    return (
      <input
        name={name}
        value={value}
        className={className}
        type={type}
        placeholder={placeholder}
        autoComplete="false"
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
};
TextBox.propTypes = {
  name: string.isRequired,
  className: string.isRequired,
  type: string.isRequired,
  placeholder: string.isRequired,
  onChange: func.isRequired,
  inputType: string.isRequired,
  value: string.isRequired,
};
export default TextBox;
