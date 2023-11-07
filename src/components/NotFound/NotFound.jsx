import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1)
  }
  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <button
        className="not-found__button"
        type="button"
        aria-label="Вернуться назад."
        onClick={handleClick}>Назад</button>
    </main>
  )
}

export default NotFound;