import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Profile({ signalfooter }) {
  const location = useLocation();
  const currentpath = location.pathname;

  useEffect(() => {
    signalfooter(currentpath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentpath])

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, юзер.</h1>
      <form className="profile__form">
        <label className="profile__text profile__label">Имя
          <input className="profile__text profile__input" type="text" value={'юзер'}></input>
        </label>
        <label className="profile__text profile__label">E-mail
          <input className="profile__text profile__input" type="email" value={'user@inter.net'}></input>
        </label>
      </form>
      <button className="profile__button profile__edit">Редактировать</button>
      <button className="profile__button profile__quit">Выйти из аккаунта</button>
    </main>
  )
}

export default Profile;
