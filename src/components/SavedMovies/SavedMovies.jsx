import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />

      <main className="main">
        <SearchForm />
        <MoviesCardList userList={true} />
      </main>

      <Footer />
    </>
  )
}

export default SavedMovies;