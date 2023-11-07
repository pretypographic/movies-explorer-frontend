import Header from "../Header/Header";
import { useState } from "react";

function Profile({ loggedIn, logout }) {
  const [editOn, setEditOn] = useState(false);
  const [problem, setProblem] = useState(false);

  function onEditButtonClick() {
    setEditOn(true);
  }

  function onSaveButtonClick(event) {
    event.preventDefault();
    setProblem(true)
  }

  return (
    <>
      <Header loggedIn={loggedIn} />

      <main className="profile">
        <h1 className="profile__title">Привет, юзер!</h1>
        <form className="profile__form" name="profile">
          <label className="profile__label">Имя
            <input
              className="profile__input"
              placeholder="Ваше имя"
              type="text"
              maxLength="30"
              minLength="2"
              value={'юзер'}
              disabled={!editOn}
              required />
          </label>
          <label className="profile__label">E-mail
            <input
              className="profile__input"
              placeholder="Ваш адрес электронной почты"
              type="email"
              value={'user@inter.net'}
              disabled={!editOn}
              required />
          </label>
          {
            problem &&
            <p className="profile__paragraph">При обновлении профиля произошла ошибка.</p>
          }
          {
            editOn
              ? <button
                className={`profile__button profile__button_assignment_submit ${problem && "profile__button_status_disabled"}`}
                type="submit"
                aria-label="Сохранить изменения."
                onClick={onSaveButtonClick}
                disabled={problem}>Сохранить</button>
              : <div className="profile__panel">
                <button
                  className="profile__button profile__button_assignment_edit"
                  type="button"
                  aria-label="Редактировать профиль."
                  onClick={onEditButtonClick}>Редактировать</button>
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
