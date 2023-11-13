function FilterCheckbox({ checked, handleCheckboxChange }) {

  return (
    <div className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        type="checkbox"
        id="checkbox"
        checked={checked}
        onChange={handleCheckboxChange} />
      <label className="filter-checkbox__label" htmlFor="checkbox">Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;
