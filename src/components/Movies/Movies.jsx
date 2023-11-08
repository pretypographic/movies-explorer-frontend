import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

function Movies({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />

      <main className="main">
        <SearchForm />
        <MoviesCardList />
        <Preloader />
      </main>

      <Footer />
    </>
  )
}

export default Movies;