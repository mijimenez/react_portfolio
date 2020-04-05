import React from "react";
import { Link } from "react-router-dom";
import { HashLink as AnchorLink } from 'react-router-hash-link';

function Nav() {
  return (
    <div className="navbar-container fixed-top">
        <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" to="/"><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="Logo" className="logo"/><h1 className="logo-name">Madeline Jimenez</h1></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <AnchorLink className="nav-link" to="/#home">About<span className="sr-only">(current)</span></AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink className="nav-link" to="/#contactMe">Contact</AnchorLink>
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