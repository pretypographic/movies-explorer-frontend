import { useState } from "react";

function FilterCheckbox() {
  const [checked, setChecked] = useState(true);

  function onclick() {
    setChecked(!checked);
  }

  return (
    <div className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        type="checkbox"
        id="checkbox"
        checked={checked}
        onClick={onclick} />
      <label className="filter-checkbox__label" htmlFor="checkbox">Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;
