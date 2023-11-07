import { NavLink, Link } from "react-router-dom";

function Navigation({ accessNavActive, onClick }) {
  return (
    <div className="header__nav-panel ">
      <nav className={`header__nav ${accessNavActive && "header__nav_opened "}`}>
        <div className="header__substrate">
          <NavLink
            to="/"
            className={({ isActive }) => `header__link header__link_for-nav-panel_main-page ${isActive
              ? "header__link_for-nav-panel_current"
              : ""}`}>Главная</NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => `header__link header__link_for-nav-panel_basic ${isActive
              ? "header__link_for-nav-panel_current"
              : ""}`}>Фильмы</NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) => `header__link header__link_for-nav-panel_basic ${isActive
              ? " header__link_for-nav-panel_current"
              : ""}`}>Сохранённые фильмы</NavLink>
        </div>
        <Link to="/profile" className="header__link header__link_for-nav-panel_with-background">Аккаунт</Link>
        <div className="header__shadow" />
      </nav>
      <button
        className={`header__access-nav-button ${accessNavActive && "header__access-nav-button_active "}`}
        type="button"
        aria-label="Навигационная панель."
        onClick={onClick} />
    </div>
  )
}

export default Navigation;
