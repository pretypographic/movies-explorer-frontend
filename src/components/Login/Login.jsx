import UserForm from "../UserForm/UserForm";

function Login({ handleLogIn, error }) {
  return (
    <main className="main main_alignment_center">
      <UserForm
        signup={false}
        heading="Рады видеть!"
        submitButtonLabel="Войти"
        error={error}
        handleUserForm={handleLogIn} />
    </main>
  )
}

export default Login;