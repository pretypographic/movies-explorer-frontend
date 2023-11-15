import { useEffect, useState } from "react";

function MoviesCard({ isSavedMovies, movie, userMoviesDatabase, saveMovie, deleteMovie }) {
  const [movieSaved, setMovieSaved] = useState(false);

  function formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    if (hours > 0) {
      return `${hours}ч ${minutes}м`;
    } else {
      return `${minutes}м`;
    };
  };

  function handleSaveMovieClick() {
    saveMovie(movie);
  }

  function handleDaleteMovieClick() {
    deleteMovie(movie.id);
  }

  useEffect(() => {
    setMovieSaved(userMoviesDatabase.some((savedMovie) => {
      return savedMovie.id === movie.id;
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userMoviesDatabase])

  return (
    <div className="movies-card">
      <a
        href={movie.trailerLink}
        className="movies-card__link"
        title={`Смотреть трейлер: ${movie.nameRU}`}
        target="_blank"
        rel="noreferrer">
        <img className="movies-card__image"
          src={`https://api.nomoreparties.co/${movie.image.url}`}
          alt={`Постер: ${movie.nameRU}`} /></a>
      <h2 className="movies-card__name">{movie.nameRU}</h2>
      <p className="movies-card__duration">{formatDuration(movie.duration)}</p>
      {
        isSavedMovies
          ? <button
            className="movies-card__button movies-card__button_type_delete"
            type="button"
            aria-label="Убрать из избранного?"
            onClick={handleDaleteMovieClick} />
          : movieSaved
            ? <button
              className="movies-card__button movies-card__button_type_saved"
              type="button"
              aria-label="Убрать из избранного?"
              onClick={handleDaleteMovieClick} />
            : <button
              className="movies-card__button"
              type="button"
              aria-label="Сохранить?"
              onClick={handleSaveMovieClick}>Сохранить</button>
      }
    </div >
  )
}

export default MoviesCard;