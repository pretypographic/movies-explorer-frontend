import UserForm from "../UserForm/UserForm";

function Login({ login }) {
  return (
    <main>
      <UserForm heading="Рады видеть!" submit="Войти" signup={false} login={login} />
    </main>
  )
}

export default Login;