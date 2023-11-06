import { NavLink, Link } from "react-router-dom";

function Navigation({ accessNavActive, onClick }) {
  return (
    <div className="header__navpanel ">
      <nav className={`header__nav ${accessNavActive && "header__nav_opened "}`}>
        <div className="header__substrate">
          <NavLink
            to="/"
            className={({ isActive }) => `header__link header__navlink header__navlink_main ${isActive
              ? "header__navlink_current"
              : ""}`}>Главная</NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => `header__link header__navlink ${isActive
              ? "header__navlink_current"
              : ""}`}>Фильмы</NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) => `header__link header__navlink ${isActive
              ? " header__navlink_current"
              : ""}`}>Сохранённые фильмы</NavLink>
        </div>
        <Link to="/profile" className="header__link header__accountnavlink">Аккаунт</Link>
        <div className="header__shadow" />
      </nav>
      <button
        className={`header__accessnavbutton ${accessNavActive && "header__accessnavbutton_active "}`}
        type="button"
        aria-label="Навигационная панель."
        onClick={onClick} />
    </div>
  )
}

export default Navigation;
