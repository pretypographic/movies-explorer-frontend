import { useEffect } from "react";

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  isSavedMovies,
  movies,
  listLength,
  uploadList,
  searchResult,
  userMoviesDatabase,
  saveMovie,
  deleteMovie
}) {
  useEffect(() => {
    uploadList(searchResult);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listLength, searchResult]);

  return (
    <section className="movies-card-list">
      {
        movies.map((movie, id) => (
          <MoviesCard
            isSavedMovies={isSavedMovies}
            key={movie.id}
            movie={movie}
            userMoviesDatabase={userMoviesDatabase}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie} />
        ))
      }
    </section>
  )
}

export default MoviesCardList;