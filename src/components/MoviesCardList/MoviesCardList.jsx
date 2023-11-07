import movies from "../../utils/movies";

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ userList }) {
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