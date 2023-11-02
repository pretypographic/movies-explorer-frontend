function Navigation({ accessNavActive, onClick }) {
  return (
    <div className="header__navpanel ">
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
  )
}

export default Navigation;
