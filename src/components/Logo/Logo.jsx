import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Logo() {
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/", { replace: false });
  }
  return (
    <img
      className="logo"
      src={logo}
      alt="Cinema. Логотип."
      onClick={handleLogoClick} />
  )
}

export default Logo;