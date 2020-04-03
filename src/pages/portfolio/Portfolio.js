import React from "react";
import { Link } from "react-router-dom";
import './sass/style.scss';

function Portfolio() {
  return (
    <main className="main">
        <h2 className="card-title main-title mb-4 pb-4 w-100">Portfolio</h2>
        <div className="boxes">
            <div className="box-container">
                <div className="box-container-icons">
                    <Link to="https://github.com/jonesec2/Pack-It"  target="_blank"><i className="fab fa-github"></i></Link>
                </div>
                <div className="box">
                    <div className="thumbnail1 work-thumbnail" alt="Thumbnail Image"> 
                    </div>
                    <Link className="box-overlay box-overlay1" to="https://jonesec2.github.io/Pack-It/"  target="_blank"></Link>
                </div>
            </div>
            <div className="box-container">
                <div className="box-container-icons">
                    <Link to="https://github.com/mijimenez/bootcamp_weather_dashboard"  target="_blank"><i className="fab fa-github"></i></Link>
                </div>
                <div className="box">
                    <div className="thumbnail2 work-thumbnail" alt="Thumbnail Image"> 
                    </div>
                    <Link className="box-overlay box-overlay2" to="https://mijimenez.github.io/bootcamp_weather_dashboard/"  target="_blank"></Link>
                </div>
            </div>
            <div className="box-container">
                <div className="box-container-icons">
                    <Link to="https://github.com/mijimenez/bootcamp_code_quiz" target="_blank"><i className="fab fa-github"></i></Link>
                </div>
                <div className="box">
                    <div className="thumbnail3 work-thumbnail" alt="Thumbnail Image"> 
                    </div>
                    <Link className="box-overlay box-overlay3" to="https://mijimenez.github.io/bootcamp_code_quiz/" target="_blank"></Link>
                </div>
            </div>
            <div className="box-container">
                <div className="box-container-icons">
                    <Link to="https://github.com/mijimenez/bootcamp_team_profile_generator" target="_blank"><i className="fab fa-github"></i></Link>
                </div>
                <div className="box">
                    <div className="thumbnail4 work-thumbnail" alt="Thumbnail Image"> 
                    </div>
                    <Link className="box-overlay box-overlay4" to="https://github.com/mijimenez/bootcamp_team_profile_generator" target="_blank"></Link>
                </div>
            </div>
            <div className="box-container">
                <div className="box-container-icons">
                    <Link to="https://github.com/mijimenez/bootcamp_burger_node_express_handlebars" target="_blank"><i className="fab fa-github"></i></Link>
                </div>
                <div className="box">
                    <div className="thumbnail5 work-thumbnail" alt="Thumbnail Image"> 
                    </div>
                    <Link className="box-overlay box-overlay5" to="https://gentle-fortress-17484.herokuapp.com/" target="_blank"></Link>
                </div>
            </div>
            <div className="box-container">
                <div className="box-container-icons">
                    <Link to="https://github.com/schoe14/Good-Cuisine" target="_blank"><i className="fab fa-github"></i></Link>
                </div>
                <div className="box">
                    <div className="thumbnail6 work-thumbnail" alt="Thumbnail Image"> 
                    </div>
                    <Link className="box-overlay box-overlay6" to="https://good-cuisine.herokuapp.com/" target="_blank"></Link>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Portfolio;