import React, { useState } from "react";

import "../Styles/HamburgerMenu.css";

export default function HamburgerMenu(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hamburger-container">
      <button
        className={menuOpen ? "hamburger-menu-open" : "hamburger-menu-closed"}
        onClick={toggleMenu}
      ></button>
      <div className={menuOpen ? "dropdown-menu-open" : "dropdown-menu-closed"}>
        {menuOpen
          ? props.children.map((child, index) => {
              return (
                <div className="hamburger-item" key={index}>
                  {child}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
