import { useState, useCallback } from "react";

function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(event) {
    const target = event.target; 
    const name = target.name;
    const value = target.value;
    const errorMessage = target.validationMessage;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: errorMessage});
    setIsValid(target.closest("form").checkValidity());
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    }, [setValues, setErrors, setIsValid]);

  return { values, errors, isValid, handleChange, resetForm };
}

export default useForm;