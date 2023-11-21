import { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({
  isSearchingNewMovies,
  handleSearchFormSubmit,
  userMoviesDatabase
}) {
  const [shortFilmsChecked, setShortFilmsChecked] = useState(false);
  const { values, setValues, errors, isValid, handleChange } = useForm({});

  function handleCheckboxChange() {
    setShortFilmsChecked(!shortFilmsChecked);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSearchFormSubmit(values.keyword, shortFilmsChecked);
  }

  useEffect(() => {
    if (isSearchingNewMovies) {
      if (localStorage.getItem("requeststorage")) {
        const { keyword, shortFilmsChecked } = JSON.parse(localStorage.getItem("requeststorage"));
        setValues({ ...values, keyword: keyword });
        setShortFilmsChecked(shortFilmsChecked);
      }
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    handleSearchFormSubmit(values.keyword, shortFilmsChecked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shortFilmsChecked])

  useEffect(() => {
    if(userMoviesDatabase) {
      handleSearchFormSubmit(values.keyword, shortFilmsChecked);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userMoviesDatabase])

  return (
    <section className="search-form">
      <form
        className="search-form__form"
        name="search-form"
        onSubmit={handleSubmit}>
        <fieldset className="search-form__fieldset">
          <input
            className="search-form__input"
            name="keyword"
            value={values.keyword ? values.keyword : ""}
            placeholder="Фильм"
            type="text"
            required
            onChange={handleChange} />
          <button
            className="search-form__button"
            type="submit"
            aria-label="Поиск."
            disabled={!isValid} />
          <span className="search-form__error-message">{errors.keyword && 'Нужно ввести ключевое слово'}</span>
        </fieldset>
        <FilterCheckbox checked={shortFilmsChecked} handleChange={handleCheckboxChange} />
      </form>
    </section>
  )
}

export default SearchForm;