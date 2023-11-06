import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';

function UserForm({ heading, submit, signup, login }) {
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/", { replace: false });
  }

  function handleSubmit(event) {
    event.preventDefault();
    login();
  }

  return (
    <section className="userform">
      <img className="userform__logo" src={logo} alt="Cinema." onClick={handleLogoClick} />
      <h1 className="userform__heading">{heading}</h1>
      <form className="userform__form" onSubmit={handleSubmit}>
        {
          signup &&
          <label className="userform__label">Имя
            <input className="userform__input" type="text" /></label>
        }
        <label className="userform__label">E-mail
          <input className="userform__input" type="text" /></label>
        <label className="userform__label">Пароль
          <input className="userform__input" type="text" /></label>
        <button className="userform__submitbutton">{submit}</button>
      </form>
      {
        signup
          ? <div className="userform__note">
            <p className="userform__text">Уже зарегистрированы?</p>
            <Link className="userform__link"
              to="/signin"
              title="Войти">Войти</Link>
          </div>
          : <div className="userform__note">
            <p className="userform__text">Ещё не зарегистрированы?</p>
            <Link className="userform__link"
              to="/signup"
              title="Регистрация">
              Регистрация</Link>
          </div>
      }
    </section>
  )
}

export default UserForm;