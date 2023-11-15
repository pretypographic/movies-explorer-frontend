import { useEffect } from "react";

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(
  { userList,
    movies,
    listLength,
    uploadList,
    searchResult,
    userMoviesList,
    saveMovie,
    deleteMovie }
) {
  useEffect(() => {
    uploadList(searchResult);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listLength, searchResult]);

  return (
    <section className="movies-card-list">
      {
        userList
          ? movies.map((movie, id) => (
            <MoviesCard
              userList={userList}
              key={id}
              movie={movie}
              userMoviesList={userMoviesList}
              deleteMovie={deleteMovie} />
          ))
          : movies.map((movie, id) => (
            <MoviesCard
              key={id}
              movie={movie}
              userMoviesList={userMoviesList}
              saveMovie={saveMovie}
              deleteMovie={deleteMovie} />
          ))
      }
    </section>
  )
}

export default MoviesCardList;