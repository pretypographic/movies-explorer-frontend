import Header from "../Header/Header";
import { useState } from "react";

function Profile({ loggedIn, logout }) {
  const [editOn, setEditOn] = useState(false);
  const [problem, setProblem] = useState(false);

  function oneditbuttonclick() {
    setEditOn(true);
  }

  function onsavebuttonclick(event) {
    event.preventDefault();
    setProblem(true)
  }

  return (
    <>
      <Header loggedIn={loggedIn} />

      <main className="profile">
        <h1 className="profile__title">Привет, юзер!</h1>
        <form className="profile__form">
          <label className="profile__text profile__label">Имя
            <input
              className="profile__text profile__input"
              type="text"
              maxLength="30"
              minLength="2"
              value={'юзер'}
              disabled={!editOn}
              required />
          </label>
          <label className="profile__text profile__label">E-mail
            <input
              className="profile__text profile__input"
              type="email"
              value={'user@inter.net'}
              disabled={!editOn}
              required />
          </label>
          {
            problem &&
            <p
              className="profile__text profile__errortext">При обновлении профиля произошла ошибка.</p>
          }
          {
            editOn
              ? <button
                className={`profile__button profile__savebutton ${problem && "profile__savebutton_disabled"}`}
                type="submit"
                aria-label="Сохранить изменения."
                onClick={onsavebuttonclick}
                disabled={problem}>Сохранить</button>
              : <div className="profile__panel">
                <button
                  className="profile__button profile__editbutton"
                  type="button"
                  aria-label="Редактировать профиль."
                  onClick={oneditbuttonclick}>Редактировать</button>
                <button
                  className="profile__button profile__quitbutton"
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
