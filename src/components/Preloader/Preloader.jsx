import preloaderImg from '../../images/291884W.png';

function Preloader({ uploaderOn, preloaderOn, handleUploader }) {
  return (
    <>
      {
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