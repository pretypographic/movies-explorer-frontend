import { useEffect } from "react";
import UserForm from "../UserForm/UserForm";

function Register({ handleRegister, errorMessage, resetError }) {
  useEffect(() => {
    resetError()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="main main_alignment_center">
      <UserForm
        signup={true}
        eading="Добро пожаловать!"
        submitButtonLabel="Зарегистрироваться"
        errorMessage={errorMessage}
        handleUserForm={handleRegister} />
    </main>
  )
}

export default Register;