import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import UserForm from "../UserForm/UserForm";

function Register({ signalComponents }) {
  const location = useLocation();
  const currentpath = location.pathname;

  useEffect(() => {
    signalComponents(currentpath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentpath])

  return (
    <main>
      <UserForm heading="Добро пожаловать!" submit="Зарегистрироваться" signup={true} />
    </main>
  )
}

export default Register;