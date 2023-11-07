import UserForm from "../UserForm/UserForm";

function Register({ login }) {
  return (
    <main>
      <UserForm heading="Добро пожаловать!" submit="Зарегистрироваться" signup={true} login={login} />
    </main>
  )
}

export default Register;