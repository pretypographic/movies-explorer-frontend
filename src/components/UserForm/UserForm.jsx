import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';

import Logo from '../Logo/Logo';

function UserForm({ heading, submit, signup, login }) {
  const { values, errors, isValid, handleChange, resetForm } = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(values);
    login();
    resetForm();
  }

  return (
    <section className="user-form">
      <Logo />
      <h1 className="user-form__heading">{heading}</h1>
      <form
        className="user-form__inputs"
        name="user-form"
        onSubmit={handleSubmit}>
        {
          signup &&
          <label className="user-form__label">Имя
            <input
              className="user-form__input"
              name="name"
              value={values.name}
              placeholder="Напечатайте ваше имя"
              type="text"
              maxLength="30"
              minLength="2"
              required
              onChange={handleChange} />
            <span className="user-form__error-message">{errors.name}</span>
            </label>
        }
        <label className="user-form__label">E-mail
          <input
            className="user-form__input"
            name="email"
            value={values.email}
            placeholder="Напечатайте ваш адрес электронной почты"
            type="email"
            required
            onChange={handleChange} />
          <span className="user-form__error-message">{errors.email}</span>
          </label>
        <label className="user-form__label">Пароль
          <input
            className="user-form__input"
            name="password"
            value={values.password}
            placeholder="Напечатайте пароль"
            type="password"
            minLength="2"
            required
            onChange={handleChange} />
          <span className="user-form__error-message">{errors.password}</span>
          </label>
        <button
          className={`user-form__button ${!isValid && "user-form__button_disabled"}`}
          type="submit"
          aria-label={`${submit}.`}
          disabled={!isValid}>{submit}</button>
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