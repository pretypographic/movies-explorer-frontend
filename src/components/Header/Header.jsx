import { useState } from 'react';
import logo from '../../images/logo.svg';

function Header({ loggedIn, login }) {
  const [accessNavActive, setAccessNavActive] = useState(false);

  function onClick() {
    setAccessNavActive(!accessNavActive)
  }

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Cinema." />
      {
        loggedIn
          ? <div className="header__navpanel ">
            <nav className={`header__nav ${accessNavActive && 'header__nav_opened '}`}>
              <div className="header__substrate">
                <button className="header__button header__navbutton header__navbutton_main ">Главная</button>
                <button className="header__button header__navbutton header__navbutton_current ">Фильмы</button>
                <button className="header__button header__navbutton ">Сохранённые фильмы</button>
              </div>
              <button className="header__button header__accountnavbutton ">Аккаунт</button>
              <div className="header__shadow" />
            </nav>
            <button
              className={`header__button header__accessnavbutton ${accessNavActive && 'header__accessnavbutton_active '}`}
              onClick={onClick} />
          </div>
          : <div className="header__accesspanel">
            <button className="header__button header__upsignbutton ">Регистрация</button>
            <button className="header__button header__insignbutton " onClick={login}>Войти</button>
          </div>
      }
    </header>
  )
}

export default Header;