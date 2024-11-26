import React from "react";
import "./SideMenu.css";

const SideMenu = ({ isVisible, closeMenu, handleMenuClick }) => {
  return (
    <div className={`side-menu ${isVisible ? "visible" : ""}`}>    
      {/* Menu options */}
      <ul>
        <li onClick={() => handleMenuClick("Recipes")}>Recipes</li>
        <li onClick={() => handleMenuClick("Tips")}>Tips</li>
        <li onClick={() => handleMenuClick("Tools")}>Tools</li>
        <li onClick={() => handleMenuClick("Cleaning")}>Cleaning</li>
        <li onClick={() => handleMenuClick("Tips")}>Other Topics</li>
      </ul>

      
    </div>
  );
};

export default SideMenu;
