import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  const [accessNavActive, setAccessNavActive] = useState(false);
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/", {replace: false});
  }

  function handleNavigationClick() {
    setAccessNavActive(!accessNavActive);
  }

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Cinema. Логотип." onClick={handleLogoClick} />
      {
        loggedIn
          ? <Navigation accessNavActive={accessNavActive} onClick={handleNavigationClick} />
          : <div className="header__access-panel">
            <Link
              to="/signup"
              className="header__link header__link_for-access-panel_without-background">Регистрация</Link>
            <Link
              to="/signin"
              className="header__link header__link_for-access-panel_with-background">Войти</Link>
          </div>
      }
    </header>
  )
}

export default Header;
