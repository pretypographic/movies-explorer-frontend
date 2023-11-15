import UserForm from "../UserForm/UserForm";

function Login({ handleLogIn, errorMessage }) {
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