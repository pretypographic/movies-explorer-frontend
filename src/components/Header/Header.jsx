import { useState } from 'react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ allowedHeader, loggedIn, login }) {
  const [accessNavActive, setAccessNavActive] = useState(false);

  function onClick() {
    setAccessNavActive(!accessNavActive)
  }

  return (
    allowedHeader && <header className="header">
      <img className="header__logo" src={logo} alt="Cinema." />
      {
        loggedIn
          ? <Navigation accessNavActive={accessNavActive} onClick={onClick} />
          : <div className="header__accesspanel">
            <button className="header__button header__upsignbutton ">Регистрация</button>
            <button className="header__button header__insignbutton " onClick={login}>Войти</button>
          </div>
      }
    </header>
  )
}

export default Header;
