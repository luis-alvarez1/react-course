import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const { type, id, value, onChange, onBlur, isValid, label } = props;

  const inputRef = useRef();

  const activate = () => {
    inputRef.current?.focus();
  };

  useImperativeHandle(ref, () => ({
    focus: activate,
  }));

  return (
    <>
      <div className={`${classes.control} ${!isValid && classes.invalid}`}>
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          onChange={onChange}
          id={id}
          value={value}
          onBlur={onBlur}
        />
      </div>
    </>
  );
});

export default Input;
