function MoviesCard({ userlist, movie }) {
  return (
    <div className="moviescard">
      <img className="moviescard__image" src={movie.image} alt={`Постер: ${movie.name}`} />
      <p className="moviescard__name">{movie.name}</p>
      <p className="moviescard__duration">{movie.duration}</p>
      {
        userlist
          ? <button
            className="moviescard__button moviescard__button_delete"
            type="button"
            aria-label="Убрать из избранного?" />
          : movie.saved
            ? <button
              className="moviescard__button moviescard__button_saved"
              type="button"
              aria-label="Убрать из избранного?" />
            : <button
              className="moviescard__button"
              type="button"
              aria-label="Сохранить?">Сохранить</button>
      }
    </div>
  )
}

export default MoviesCard;