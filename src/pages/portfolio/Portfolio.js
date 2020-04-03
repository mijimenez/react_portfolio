import React, { Component } from "react";
import data from "../../utils/Items.json";
import PortfolioItem from "../../components/PortfolioItem";
import './sass/style.scss';

class Portfolio extends Component {

state = {
    data
      };

render() {
    return (
        <div id="portfolio">
            <main className="main">
                <h2 className="card-title main-title mb-4 pb-4 w-100">Portfolio</h2>
                <div className="boxes">
                {/* <PortfolioItem /> */}

            {this.state.data.map(item => (
            <PortfolioItem
                liveLink={item.liveLink}
            />
            ))}         

                </div>
            </main>
        </div>
    );
    }
}

export default Portfolio;