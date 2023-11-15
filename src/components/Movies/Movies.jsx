import { useEffect } from "react";
import useList from "../../hooks/useList";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

function Movies({
  loggedIn,
  searchMovie,
  searchResult,
  searchResultNotFound,
  userMoviesDatabase,
  refreshResult,
  saveMovie,
  deleteMovie,
  errorMessage,
  preloaderOn,
}) {
  const {
    arrey,
    listLength,
    uploaderOn,
    uploadList,
    handleUploader,
    adjustListWidth } = useList();

  useEffect(() => {
    let timeoutId;

    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        adjustListWidth(window.innerWidth);
      }, 300);
    };

    adjustListWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (localStorage.getItem("requeststorage")) {
      const { movieslist } = JSON.parse(localStorage.getItem("requeststorage"));
      refreshResult(movieslist);
    } else {
      refreshResult([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header loggedIn={loggedIn} />

      <main className="main">
        <SearchForm
          isSearchingNewMovies={true}
          searchMovie={searchMovie}
          searchResult={searchResult}
          uploadList={uploadList} />
        <MoviesCardList
          isSavedMovies={false}
          movies={arrey}
          listLength={listLength}
          uploadList={uploadList}
          searchResult={searchResult}
          userMoviesDatabase={userMoviesDatabase}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie} />
        <Preloader
          searchResultNotFound={searchResultNotFound}
          errorMessage={errorMessage}
          preloaderOn={preloaderOn}
          uploaderOn={uploaderOn}
          handleUploader={handleUploader} />
      </main>

      <Footer />
    </>
  )
}

export default Movies;