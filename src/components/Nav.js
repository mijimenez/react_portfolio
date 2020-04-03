import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar-container fixed-top">
        <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" to="/"><img src="./assets/images/logo.png" alt="Logo" className="logo"/><h1 className="logo-name">Madeline Jimenez</h1></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">About<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/#contactMe">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default Nav;