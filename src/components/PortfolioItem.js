import React from "react";

function PortfolioItem({ gitHubLink, liveLink, image, title }) {
  return (
    <div className="box-container">
    <div className="box-container-icons">
        <a href={gitHubLink}  target="_blank"><i className="fab fa-github"></i></a>
    </div>
    <div className="box">
        <div className="work-thumbnail" alt="Thumbnail Image" style={image}> 
        </div>
        <a className="box-overlay" href={liveLink}  target="_blank"><h2 className="title">{title}</h2></a>
    </div>
</div>
  );
}

export default PortfolioItem;