import { useEffect } from "react";

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ userList, movies, listLength, uploadList, searchResult }) {
  useEffect(() => {
    uploadList(searchResult);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listLength, searchResult]);

  return (
    <section className="movies-card-list">
      {
        userList
          ? movies.map((movie, id) => (
            movie.saved && <MoviesCard userList={userList} movie={movie} key={id} />
          ))
          : movies.map((movie, id) => (
            <MoviesCard key={id} movie={movie} />
          ))
      }
    </section>
  )
}

export default MoviesCardList;