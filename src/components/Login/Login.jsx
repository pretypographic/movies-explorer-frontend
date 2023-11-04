import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import UserForm from "../UserForm/UserForm";

function Login({ signalComponents }) {
  const location = useLocation();
  const currentpath = location.pathname;

  useEffect(() => {
    signalComponents(currentpath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentpath])

  return (
    <main>
      <UserForm heading="Рады видеть!" submit="Войти" />
    </main>
  )
}

export default Login;