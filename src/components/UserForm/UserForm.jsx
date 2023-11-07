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
    <section className="user-form">
      <img className="user-form__logo" src={logo} alt="Cinema." onClick={handleLogoClick} />
      <h1 className="user-form__heading">{heading}</h1>
      <form className="user-form__inputs" onSubmit={handleSubmit}>
        {
          signup &&
          <label className="user-form__label">Имя
            <input
              className="user-form__input"
              type="text"
              maxLength="30"
              minLength="2"
              required /></label>
        }
        <label className="user-form__label">E-mail
          <input
            className="user-form__input"
            type="email"
            required /></label>
        <label className="user-form__label">Пароль
          <input
            className="user-form__input"
            type="password"
            required /></label>
        <button
          className="user-form__button"
          type="submit"
          aria-label={`${submit}.`}>{submit}</button>
      </form>
      {
        signup
          ? <div className="user-form__note">
            <p className="user-form__text">Уже зарегистрированы?</p>
            <Link className="user-form__link"
              to="/signin"
              title="Войти">Войти</Link>
          </div>
          : <div className="user-form__note">
            <p className="user-form__text">Ещё не зарегистрированы?</p>
            <Link className="user-form__link"
              to="/signup"
              title="Регистрация">
              Регистрация</Link>
          </div>
      }
    </section>
  )
}

export default UserForm;