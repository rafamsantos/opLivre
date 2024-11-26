import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <nav className="navbar">
      <div className="logo">How do I?</div>
      <ul className="nav-links">
        <li onClick={() => handleNavigation('/')}>Home</li> {/* Navigate to Home page */}
        <li onClick={() => handleNavigation('#kitchen')}>Kitchen</li>
        <li onClick={() => handleNavigation('#clothing')}>Clothing</li>
        <li onClick={() => handleNavigation('#cleaning')}>Cleaning</li>
        <li onClick={() => handleNavigation('#fix')}>Fix Things</li>
        <li onClick={() => handleNavigation('#self-care')}>Self Care</li>
      </ul>
    </nav>
  );
};

export default Navbar;
