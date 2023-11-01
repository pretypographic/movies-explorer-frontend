import movies from "../../utils/movies";

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList () {
  return (
    <section className="moviescardlist">
      {
        movies.map((movie, id) => (
          <MoviesCard key={id} movie={movie} />
        ))
      }
    </section>
  )
}

export default MoviesCardList;