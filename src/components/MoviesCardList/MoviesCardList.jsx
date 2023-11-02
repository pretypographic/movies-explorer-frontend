import movies from "../../utils/movies";

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ userlist }) {
  return (
    <section className="moviescardlist">
      {
        userlist
          ? movies.map((movie, id) => (
            movie.saved && <MoviesCard userlist={userlist} movie={movie} key={id} />
          ))
          : movies.map((movie, id) => (
            <MoviesCard key={id} movie={movie} />
          ))
      }
    </section>
  )
}

export default MoviesCardList;