import UserForm from "../UserForm/UserForm";

function Register() {
  return (
    <main>
      <UserForm heading="Добро пожаловать!" submit="Зарегистрироваться" signup={true} />
    </main>
  )
}

export default Register;