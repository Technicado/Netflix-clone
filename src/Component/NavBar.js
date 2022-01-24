import React, { useEffect, useState } from "react";
import "../Styling/NavBar.css";

const NavBar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="NetFlix Logo"
        className="nav__logo"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Profile pic"
        className="nav__avatar"
      />
    </div>
  );
};

export default NavBar;
