import React, { useState } from "react";
import {
  FaPlus,
  FaExchangeAlt,
  FaTrash,
  FaPencilAlt,
  FaParagraph,
  FaCompress,
  FaLanguage,
  FaSmile,
  FaSpellCheck
} from "react-icons/fa";
import "./Menu.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenuToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleMenuItemClick = (action) => {
    console.log("Clicked:", action);
    handleMenuToggle();
    // Perform the appropriate action based on the clicked menu item
    // For example, you can call different functions or update state accordingly
  };

  return (
    <div>
      {/* <button className="menu-trigger" onClick={handleMenuToggle}>
        Menu
      </button> */}
      {isOpen && (
        <div className="menu">
          <div
            className="menu-item"
            onClick={() => handleMenuItemClick("Add Below")}
          >
            <FaPlus />
            <span className="menu-item-span">Add Below</span>
          </div>
          <div
            className="menu-item"
            onClick={() => handleMenuItemClick("Replace Selection")}
          >
            <FaExchangeAlt />
            <span className="menu-item-span">Replace Selection</span>
          </div>
          <div
            className="menu-item"
            onClick={() => handleMenuItemClick("Discard")}
          >
            <FaTrash />
            <span className="menu-item-span">Discard</span>
          </div>
          <hr className="menu-divider" />
          <div
            className="menu-item"
            onClick={() => handleMenuItemClick("Continue Writing")}
          >
            <FaPencilAlt />
            <span className="menu-item-span">Continue Writing</span>
          </div>
          <div
            className="menu-item"
            onClick={() => handleMenuItemClick("Elaborate")}
          >
            <FaParagraph />
            <span className="menu-item-span">Elaborate</span>
          </div>
          <div
            className="menu-item"
            onClick={() => handleMenuItemClick("Shorten")}
          >
            <FaCompress />
            <span className="menu-item-span">Shorten</span>
          </div>
          <div
            className="menu-item"
            onClick={() => handleMenuItemClick("Simplify Language")}
          >
            <FaLanguage />
            <span className="menu-item-span">Simplify Language</span>
          </div>
          <div
            className="menu-item"
            onClick={() => handleMenuItemClick("Add Emojis")}
          >
            <FaSmile />
            <span className="menu-item-span">Add Emojis</span>
          </div>
          <div
            className="menu-item"
            onClick={() => handleMenuItemClick("Fix Spelling and Grammar")}
          >
            <FaSpellCheck />
            <span className="menu-item-span">Fix Spelling and Grammarsad</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
