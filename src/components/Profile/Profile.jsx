import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Profile({ signalfooter, logout }) {
  const location = useLocation();
  const currentpath = location.pathname;
  const [editOn, setEditOn] = useState(false);

  function oneditbuttonclick() {
    setEditOn(true);
  }

  function onsavebuttonclick(event) {
    event.preventDefault();
    setEditOn(false);
  }

  useEffect(() => {
    signalfooter(currentpath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentpath])

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, юзер.</h1>
      <form className="profile__form">
        <label className="profile__text profile__label">Имя
          <input
            className="profile__text profile__input"
            type="text"
            value={'юзер'}
            disabled={!editOn}></input>
        </label>
        <label className="profile__text profile__label">E-mail
          <input
            className="profile__text profile__input"
            type="email"
            value={'user@inter.net'}
            disabled={!editOn}></input>
        </label>
        {
          editOn &&
          <button className="profile__button profile__savebutton" onClick={onsavebuttonclick}>Сохранить</button>
        }
      </form>
      {
        !editOn &&
        <div className="profile__panel">
          <button className="profile__button profile__editbutton" onClick={oneditbuttonclick}>Редактировать</button>
          <button className="profile__button profile__quitbutton" onClick={logout}>Выйти из аккаунта</button>
        </div>
      }
    </main>
  )
}

export default Profile;
