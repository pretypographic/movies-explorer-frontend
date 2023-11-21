import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import UserForm from "../UserForm/UserForm";

function Register({ handleRegister, errorMessage, formValues, resetForm, formSwitch, switchForm }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== formSwitch) {
      switchForm(pathname);
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="main main_alignment_center">
      <UserForm
        signup={true}
        heading="Добро пожаловать!"
        submitButtonLabel="Зарегистрироваться"
        errorMessage={errorMessage}
        formValues={formValues}
        handleUserForm={handleRegister} />
    </main>
  )
}

export default Register;