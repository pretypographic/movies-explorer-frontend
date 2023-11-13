import useForm from "../../hooks/useForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ getMovies }) {
  const { values, errors, isValid, handleChange } = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    getMovies(values.keywords);
  }

  return (
    <section className="search-form">
      <form className="search-form__form" name="search-form" onSubmit={handleSubmit}>
        <fieldset className="search-form__fieldset">
          <input
            className="search-form__input"
            name="keywords"
            value={values.keywords ? values.keywords : ""}
            type="text"
            placeholder="Фильм"
            required
            onChange={handleChange} />
          <button
            className="search-form__button"
            type="submit"
            aria-label="Поиск."
            disabled={!isValid} />
          <span className="search-form__error-message">{errors.password}</span>
        </fieldset>
        <FilterCheckbox />
      </form>
    </section>
  )
}

export default SearchForm;