import UserForm from "../UserForm/UserForm";

function Register({ handleRegister, errorMessage }) {
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