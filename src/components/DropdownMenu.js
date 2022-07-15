import React, { useEffect, useState } from "react";
import onClickOutside from "react-onclickoutside";
import { useDocContext, useDocUpdateContext } from "./DocProvider";

function Dropdown({ title, items = [], docValue, multiSelect = false }) {
  const docContext = useDocContext();
  const toggleContext = useDocUpdateContext(docContext);
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
        toggleContext(docContext, docValue, item.value);
        console.log(docContext);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemival = selection;
      selectionAfterRemival = selectionAfterRemival.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemival]);
    }
    toggle(!open);
  }

  function isItemInSelection(item) {
    if (selection.find((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header__title">
          <p className="dd-header__title--bold"> {title}</p>
        </div>
        <div className="dd-header__action">
          <p>{selection.length > 0 ? selection[0]["value"] : ""}</p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map((item) => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && "Selected"}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};
export default onClickOutside(Dropdown, clickOutsideConfig);