import useList from "../../hooks/useList";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

function Movies({ loggedIn, error, getMovies, searchResult, searchResultNotFound, preloaderOn }) {
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
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (localStorage.getItem("movieslist")) {
      const previousList = JSON.parse(localStorage.getItem("movieslist"));
      uploadList(previousList);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header loggedIn={loggedIn} />

      <main className="main">
        <SearchForm getMovies={getMovies} />
        <MoviesCardList
          movies={arrey}
          listLength={listLength}
          uploadList={uploadList}
          searchResult={searchResult} />
        <Preloader
          uploaderOn={uploaderOn}
          preloaderOn={preloaderOn}
          handleUploader={handleUploader}
          searchResultNotFound={searchResultNotFound}
          error={error} />
      </main>

      <Footer />
    </>
  )
}

export default Movies;