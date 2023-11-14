import { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ getMovies }) {
  const [shortFilmsChecked, setShortFilmsChecked] = useState(false);
  const { values, setValues, errors, isValid, handleChange } = useForm();

  function handleCheckboxChange() {
    setShortFilmsChecked(!shortFilmsChecked);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getMovies(values.keywords, shortFilmsChecked);
  }

  useEffect(() => {
    if (localStorage.getItem("keywords")) {
      const savedKeyword = localStorage.getItem("keywords");
      setValues({ ...values, keywords: savedKeyword });
    }
    if (localStorage.getItem("shortfilmschecked")) {
      const previousState = JSON.parse(localStorage.getItem("shortfilmschecked"));
      setShortFilmsChecked(previousState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getMovies(values.keywords, shortFilmsChecked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shortFilmsChecked])

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
          <span className="search-form__error-message">{errors.keywords && 'Нужно ввести ключевое слово'}</span>
        </fieldset>
        <FilterCheckbox checked={shortFilmsChecked} handleChange={handleCheckboxChange} />
      </form>
    </section>
  )
}

export default SearchForm;