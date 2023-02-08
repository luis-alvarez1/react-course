import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  const { type, id, value, onChange, onBlur, isValid, label } = props;

  return (
    <>
      <div className={`${classes.control} ${!isValid && classes.invalid}`}>
        <label htmlFor={id}>{label}</label>
        <input type={type} onChange={onChange} id={id} value={value} onBlur={onBlur} />
      </div>
    </>
  );
};

export default Input;
