import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import UserForm from "../UserForm/UserForm";

function Login({ handleLogIn, errorMessage, resetError, formSwitch, switchForm }) {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    if (pathname !== formSwitch) {
      switchForm(pathname);
      resetError();
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
        handleUserForm={handleLogIn} />
    </main>
  )
}

export default Login;