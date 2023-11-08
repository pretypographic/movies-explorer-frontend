import { Link } from "react-scroll";

function NavTab() {
  return (
    <nav className="nav-tab">
      <Link
        className="nav-tab__button"
        to="about-project"
        smooth={true}
        duration={500}>О проекте</Link>
      <Link
        className="nav-tab__button"
        to="techs"
        smooth={true}
        duration={500}>Технологии</Link>
      <Link
        className="nav-tab__button"
        to="about-me"
        smooth={true}
        duration={500}>Студент</Link>
    </nav>
  )
}

export default NavTab;