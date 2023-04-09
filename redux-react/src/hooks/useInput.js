import { useState } from 'react';

export const useInput = (validateValue) => {
  const [value, setValue] = useState('');
  const [isEdited, setIsEdited] = useState(false);

  const isValueValid = validateValue(value);
  const hasError = !isValueValid && isEdited;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setIsEdited(true);
  };

  const reset = () => {
    setValue('');
    setIsEdited(true);
  };
  return {
    value,
    isValueValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};
