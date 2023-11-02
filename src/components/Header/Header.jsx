import { useState } from 'react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

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
