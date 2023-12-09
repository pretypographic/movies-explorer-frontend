import preloaderImg from '../../images/291884W.png';

function Preloader({
  searchResultNotFound,
  errorMessage,
  preloaderOn,
  uploaderOn,
  handleUploader,
}) {
  return (
    <>
      {
        searchResultNotFound && <section className="preloader">
          <h2 className="preloader__text">Ничего не найдено</h2>
        </section>
      } {
        errorMessage && <section className="preloader">
          <h2 className="preloader__text">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h2>
        </section>
      } {
        preloaderOn && <section className="preloader">
          <img className="preloader__image" src={preloaderImg} alt="Идёт загрузка." />
        </section>
      } {
        uploaderOn && <section className="preloader">
          <button
            className="preloader__button"
            type="button"
            aria-label="Показать больше фильмов."
            onClick={handleUploader}>Ещё</button>
        </section>
      }
    </>
  )
}

export default Preloader;