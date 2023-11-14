import UserForm from "../UserForm/UserForm";

function Register({ handleRegister, error }) {
  return (
    <main className="main main_alignment_center">
      <UserForm
        signup={true}
        eading="Добро пожаловать!"
        submitButtonLabel="Зарегистрироваться"
        error={error}
        handleUserForm={handleRegister} />
    </main>
  )
}

export default Register;