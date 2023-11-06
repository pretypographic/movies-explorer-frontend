import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="searchform">
      <form className="searchform__form">
        <fieldset className="searchform__fieldset">
          <input
            className="searchform__input"
            type="text"
            placeholder="Фильм" />
          <button
            className="searchform__button"
            type="button"
            aria-label="Поиск." />
        </fieldset>
        <FilterCheckbox />
      </form>
    </section>
  )
}

export default SearchForm;