/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../images/logo.svg';

function UserForm({ heading, submit, signup }) {
  return (
    <section className="userform">
      <img className="userform__logo" src={logo} alt="Cinema." />
      <h1 className="userform__heading">{heading}</h1>
      <form className="userform__form">
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
            <a className="userform__link"
              src="#"
              title="Войти">Войти</a>
          </div>
          : <div className="userform__note">
            <p className="userform__text">Ещё не зарегистрированы?</p>
            <a className="userform__link"
              src="#"
              title="Регистрация">
              Регистрация</a>
          </div>
      }
    </section>
  )
}

export default UserForm;