function Preloader({ uploaderOn, handleUploader }) {
  return (
    uploaderOn && <section className="preloader">
      <button
        className="preloader__button"
        type="button"
        aria-label="Показать больше фильмов."
        onClick={handleUploader}>Ещё</button>
    </section>
  )
}

export default Preloader;