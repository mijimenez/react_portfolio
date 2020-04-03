import React from "react";
import './sass/style.scss';

function Home() {
  return (
    <div>
        <div className="hero">
            <div className="wrapper">
                <h1>Hello.</h1>
                <p>"I believe that design decisions should be well-informed by a knowledge of code; working in conjunction to provide the best user experience."</p>
            </div>
        </div>
        <div className="skills">
            <div className="wrapper">
                <h2 className="mb-4 pb-4">Programming Languages and Tools</h2>
                <div className="skills-wrapper">
                    <div className="skill">
                        <i className="fab fa-html5"></i>
                    </div>
                    <div className="skill">
                        <i className="fab fa-css3-alt"></i>
                    </div>
                    <div className="skill">
                        <i className="fab fa-js-square"></i>
                    </div>
                    <div className="skill">
                        <i className="fab fa-node"></i>
                    </div>
                    <div className="skill">
                        <i className="fab fa-sass"></i>
                    </div>
                    <div className="skill">
                        <i className="fab fa-wordpress"></i>
                    </div>
                    <div className="skill">
                        <i className="fab fa-npm"></i>
                    </div>
                    <div className="skill">
                        <i className="fab fa-git"></i>
                    </div>
                </div>
            </div>
        </div>

        <main className="main">
            <div className="contact-me" id="contactMe">
                <h2 className="card-title main-title mb-4 pb-4 w-100">Contact Me</h2>
                <div className="bio-content">
                    <div className="img-links">
                        <img src="assets/images/bio-pic.jpg" alt="bio-pic" className="card-img"/>
                        <div className="about-links">
                            <a href="https://www.linkedin.com/in/madeline-jimenez-a3557677/" target="_blank" className="linkedIn">LinkedIn</a>
                            <a href="https://github.com/mijimenez" target="_blank"  className="GitHub">GitHub</a>
                            <a href="https://www.madelinejimenez.com/" target="_blank" className="design-portfolio">Design Portfolio</a>
                            <a href="assets/images/Madeline_Jimenez_Resume_2020.pdf" download target="_blank"  className="resume">Resume<i className="fas fa-file-download"></i></a>
                        </div>
                        <div className="contact-links">
                            <a href="mailto:madelineijimenez@gmail.com"><i className="fas fa-envelope mr-2"></i>madelineijimenez@gmail.com</a>
                            <p><i className="fas fa-phone mr-2"></i>301.741.0172</p>
                        </div>
                    </div>
                    <div className="bio">
                        <p className="card-p">I am a <strong>graphic and web designer</strong>. My programming languages of choice are HTML5, CSS3 and vanilla JavaScript. Having worked in fields, ranging from men’s luxury clothing to higher education, I’ve had the privilege of working within talented creative teams to design and develop digital marketing assets including responsive websites, graphic emails and digital ads. <strong>I believe that design decisions should be well-informed by a knowledge of code; working in conjunction to provide the best user experience.</strong></p>
                        <p className="card-p">In my free-time I enjoy building static websites from scratch and going to the movies with my husband.</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
  );
}

export default Home;