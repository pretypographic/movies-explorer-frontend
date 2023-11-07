import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <fieldset className="search-form__fieldset">
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм" />
          <button
            className="search-form__button"
            type="button"
            aria-label="Поиск." />
        </fieldset>
        <FilterCheckbox />
      </form>
    </section>
  )
}

export default SearchForm;