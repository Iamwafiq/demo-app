import React from 'react';
import { func, string } from 'prop-types';

const Button = (props) => {
  const { text, className, click } = props;
  return (
    <button className={className} type="button" onClick={() => click()}>
      {text}
    </button>
  );
};
Button.propTypes = {
  click: func.isRequired,
  text: string.isRequired,
  className: string.isRequired,
};
export default Button;
