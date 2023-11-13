import { useState } from "react";
import useForm from "../../hooks/useForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ getMovies }) {
  const [checked, setChecked] = useState(true);
  const { values, errors, isValid, handleChange } = useForm();

  function handleCheckboxChange() {
    setChecked(!checked);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getMovies(values.keywords);
  }

  return (
    <section className="search-form">
      <form
        className="search-form__form"
        name="search-form"
        onSubmit={handleSubmit}>
        <fieldset className="search-form__fieldset">
          <input
            className="search-form__input"
            name="keywords"
            value={values.keywords ? values.keywords : ""}
            placeholder="Фильм"
            type="text"
            required
            onChange={handleChange} />
          <button
            className="search-form__button"
            type="submit"
            aria-label="Поиск."
            disabled={!isValid} />
          <span className="search-form__error-message">{errors.keywords}</span>
        </fieldset>
        <FilterCheckbox checked={checked} handleCheckboxChange={handleCheckboxChange} />
      </form>
    </section>
  )
}

export default SearchForm;