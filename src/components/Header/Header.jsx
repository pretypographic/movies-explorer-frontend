import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

import Logo from '../Logo/Logo';

function Header({ loggedIn }) {
  const [accessNavActive, setAccessNavActive] = useState(false);

  function handleNavigationClick() {
    setAccessNavActive(!accessNavActive);
  }

  return (
    <header className="header">
      <Logo />
      {
        loggedIn
          ? <>
            <Navigation accessNavActive={accessNavActive} />
            <button
              className={`header__button ${accessNavActive && "header__button_active "}`}
              type="button"
              aria-label="Навигационная панель."
              onClick={handleNavigationClick} />
          </>
          : <nav className="header__nav">
            <Link
              to="/signup"
              className="header__link header__link_type_without-background">Регистрация</Link>
            <Link
              to="/signin"
              className="header__link header__link_type_with-background">Войти</Link>
          </nav>
      }
    </header>
  )
}

export default Header;
