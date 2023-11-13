function MoviesCard({ userList, movie }) {
  return (
    <div className="movies-card">
      <img className="movies-card__image" src={`https://api.nomoreparties.co/${movie.image.url}`} alt={`Постер: ${movie.nameRU}`} />
      <h2 className="movies-card__name">{movie.nameRU}</h2>
      <p className="movies-card__duration">{movie.duration}</p>
      {
        userList
          ? <button
            className="movies-card__button movies-card__button_type_delete"
            type="button"
            aria-label="Убрать из избранного?" />
          : movie.saved
            ? <button
              className="movies-card__button movies-card__button_type_saved"
              type="button"
              aria-label="Убрать из избранного?" />
            : <button
              className="movies-card__button"
              type="button"
              aria-label="Сохранить?">Сохранить</button>
      }
    </div>
  )
}

export default MoviesCard;