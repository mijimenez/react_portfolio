import React from "react";

function PortfolioItem({ liveLink }) {
  return (
    <div className="box-container">
    <div className="box-container-icons">
        <a href="https://github.com/mijimenez/bootcamp_weather_dashboard"  target="_blank"><i className="fab fa-github"></i></a>
    </div>
    <div className="box">
        <div className="thumbnail2 work-thumbnail" alt="Thumbnail Image"> 
        </div>
        <a className="box-overlay box-overlay2" href={liveLink}  target="_blank"></a>
    </div>
</div>
  );
}

export default PortfolioItem;