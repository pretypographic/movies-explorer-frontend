import { NavLink, Link } from "react-router-dom";

function Navigation({ accessNavActive }) {
  return (
    <nav className={`navigation ${accessNavActive && "navigation_opened "}`}>
      <div className="navigation__substrate">
        <NavLink
          to="/"
          className={({ isActive }) => `navigation__link navigation__link_type_main-page ${isActive
            ? "navigation__link_type_current"
            : ""}`}>Главная</NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => `navigation__link navigation__link_type_basic ${isActive
            ? "navigation__link_type_current"
            : ""}`}>Фильмы</NavLink>
        <NavLink
          to="/saved-movies"
          className={({ isActive }) => `navigation__link navigation__link_type_basic ${isActive
            ? " navigation__link_type_current"
            : ""}`}>Сохранённые фильмы</NavLink>
      </div>
      <Link to="/profile" className="navigation__link navigation__link_type_with-background">Аккаунт</Link>
      <div className="navigation__shadow" />
    </nav>
  )
}

export default Navigation;
