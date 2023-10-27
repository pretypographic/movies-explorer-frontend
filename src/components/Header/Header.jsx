import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Cinema." />
      <div className="header__access-panel">
        <button className="header__button header__button_signup">Регистрация</button>
        <button className="header__button header__button_signin">Войти</button>
      </div>
    </header>
  )
}

export default Header;