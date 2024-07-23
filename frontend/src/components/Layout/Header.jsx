/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AVATAR from "../../images/AVATAR.png";
import LOGO from "../../images/LOGO.png";

import "./header.css";

export default function Header() {
  const navigate = useNavigate();
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const toHome = () => {
    navigate("/");
  };

  const handleKeyPress = (event) => {
    // Si la touche "Enter" est pressée
    if (event.key === "Enter") {
      toHome();
    }
  };

  return (
    <div className={`header ${showLinks ? "show-nav" : ""}`}>
      <img
        className="logo"
        src={LOGO}
        alt="logo"
        onClick={toHome}
        onKeyDown={handleKeyPress}
      />
      <ul className="navbar-links">
        <div className="userPanel">
          <img className="avatar" src={AVATAR} alt="avatar" />

          <button
            type="button"
            className="logIn sign"
            onClick={() => navigate("/Login")}
          >
            Se connecter
          </button>
          <button
            type="button"
            className="logIn sign"
            onClick={() => navigate("/Signup")}
          >
            S'inscrire
          </button>
        </div>
        <li className="navbar-item slideInDown-1">
          <a className="navbar-link" href="/">
            Acceuil
          </a>
        </li>
        {/* <li className="navbar-item slideInDown-2">
          <a className="navbar-link" href="/Reservation">
            Réserver une place
          </a>
        </li>
        <li className="navbar-item slideInDown-3">
          <a className="navbar-link" href="#">
            Prémium
          </a>
        </li>
        <li className="navbar-item slideInDown-4">
          <a className="navbar-link" href="#">
            Service nettoyage
          </a>
        </li> */}
      </ul>
      <button onClick={handleShowLinks} type="button" className="burgerIcon">
        <span className="burgerBar" />
      </button>
    </div>
  );
}
