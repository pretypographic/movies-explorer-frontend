import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import UserForm from "../UserForm/UserForm";

function Login({ handleLogIn, errorMessage, formValues, resetForm, formSwitch, switchForm }) {
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
        signup={false}
        heading="Рады видеть!"
        submitButtonLabel="Войти"
        errorMessage={errorMessage}
        formValues={formValues}
        handleUserForm={handleLogIn} />
    </main>
  )
}

export default Login;