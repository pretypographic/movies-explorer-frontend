import { Link } from "react-scroll";

function NavTab() {
  return (
    <nav className="navtab">
      <Link
        className="navtab__button"
        to="aboutproject"
        smooth={true}
        duration={500}>О проекте</Link>
      <Link
        className="navtab__button"
        to="techs"
        smooth={true}
        duration={500}>Технологии</Link>
      <Link
        className="navtab__button"
        to="aboutme"
        smooth={true}
        duration={500}>Студент</Link>
    </nav>
  )
}

export default NavTab;