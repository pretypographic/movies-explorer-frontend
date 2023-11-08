import UserForm from "../UserForm/UserForm";

function Register({ login }) {
  return (
    <main className="main main_alignment_center">
      <UserForm heading="Добро пожаловать!" submit="Зарегистрироваться" signup={true} login={login} />
    </main>
  )
}

export default Register;