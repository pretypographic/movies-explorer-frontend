import { useState, useCallback } from "react";

function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const emailValidationRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  function handleChange(event) {
    const target = event.target; 
    const name = target.name;
    const value = target.value;
    const errorMessage = target.validationMessage;

    if (name === "email" && !emailValidationRegex.test(value)) {
      setErrors({ ...errors, email: "Некорректный адрес электронной почты" });
      setIsValid(false);
    } else {
      setErrors({ ...errors, [name]: errorMessage });
      setIsValid(target.closest("form").checkValidity());
    }

    setValues({...values, [name]: value});
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    }, [setValues, setErrors, setIsValid]);

  return { values, setValues, errors, isValid, handleChange, resetForm };
}

export default useForm;