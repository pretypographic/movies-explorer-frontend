import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <main className="main">
      <SearchForm />
      <MoviesCardList userlist={true} />
    </main>
  )
}

export default SavedMovies;