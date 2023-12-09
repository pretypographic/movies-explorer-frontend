import { useEffect } from "react";
import useList from "../../hooks/useList";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

function SavedMovies({
  loggedIn,
  searchMovie,
  searchResult,
  searchResultNotFound,
  refreshResult,
  userMoviesDatabase,
  saveMovie,
  deleteMovie,
  errorMessage,
  preloaderOn,
}) {
  const {
    arrey,
    uploadCompleteList
  } = useList();

  function handleSearchFormSubmit(keyword, shortFilmsChecked) {
    searchMovie(keyword, shortFilmsChecked);
  }

  useEffect(() => {
    refreshResult(userMoviesDatabase);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userMoviesDatabase])


  return (
    <>
      <Header loggedIn={loggedIn} />

      <main className="main">
        <SearchForm
          isSearchingNewMovies={false}
          handleSearchFormSubmit={handleSearchFormSubmit}
          userMoviesDatabase={userMoviesDatabase} />
        <MoviesCardList
          isSavedMovies={true}
          movies={arrey}
          uploadList={uploadCompleteList}
          searchResult={searchResult}
          userMoviesDatabase={userMoviesDatabase}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie} />
        <Preloader
          searchResultNotFound={searchResultNotFound}
          errorMessage={errorMessage}
          preloaderOn={preloaderOn}
          uploaderOn={false} />
      </main>

      <Footer />
    </>
  )
}

export default SavedMovies;