import { useState } from "react";

function FilterCheckbox() {
  const [checked, setChecked] = useState(true);

  function onclick() {
    setChecked(!checked);
  }

  return (
    <div className="filtercheckbox">
      <input
        className="filtercheckbox__checkbox"
        type="checkbox"
        id="checkbox"
        checked={checked}
        onClick={onclick} />
      <label className="filtercheckbox__label" htmlFor="checkbox">Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;
