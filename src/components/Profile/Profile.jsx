import { useState } from "react";
import useForm from "../../hooks/useForm";

import Header from "../Header/Header";

function Profile({ loggedIn, logout }) {
  const { values, errors, isValid, handleChange } = useForm();
  const [editOn, setEditOn] = useState(false);

  function handleEdit() {
    setEditOn(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Header loggedIn={loggedIn} />

      <main className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form
          className={`profile__form ${!isValid && "profile__form_incorrect-input"}`}
          name="profile"
          onSubmit={handleSubmit}>
          <label className="profile__label">Имя
            <input
              className="profile__input"
              name="name"
              placeholder="Ваше имя"
              type="text"
              maxLength="30"
              minLength="2"
              value={values.name}
              disabled={!editOn}
              required
              onChange={handleChange} />
            <span className="profile__error-message">{errors.name}</span>
          </label>
          <label className="profile__label">E-mail
            <input
              className="profile__input"
              name="email"
              placeholder="Ваш адрес электронной почты"
              type="email"
              value={values.email}
              disabled={!editOn}
              required
              onChange={handleChange} />
            <span className="profile__error-message">{errors.email}</span>
          </label>
          {
            (editOn && !isValid) &&
            <p className="profile__paragraph">При обновлении профиля произошла ошибка.</p>
          }
          {
            editOn
              ? <button
                className={`profile__button profile__button_assignment_submit ${!isValid && "profile__button_disabled"}`}
                type="submit"
                aria-label="Сохранить изменения."
                disabled={!isValid}>Сохранить</button>
              : <div className="profile__panel">
                <button
                  className="profile__button profile__button_assignment_edit"
                  type="button"
                  aria-label="Редактировать профиль."
                  onClick={handleEdit}>Редактировать</button>
                <button
                  className="profile__button profile__button_assignment_exit"
                  type="button"
                  aria-label="Выйти из аккаунта."
                  onClick={logout}>Выйти из аккаунта</button>
              </div>
          }
        </form>
      </main>
    </>
  )
}

export default Profile;
