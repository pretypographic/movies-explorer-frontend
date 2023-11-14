function FilterCheckbox({ checked, handleChange }) {

  return (
    <div className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        type="checkbox"
        id="checkbox"
        checked={checked}
        onChange={handleChange} />
      <label className="filter-checkbox__label" htmlFor="checkbox">Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;
