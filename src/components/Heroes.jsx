import React, { Component } from "react";
import Hero from "./Hero";

class Heroes extends Component {
  state = {
    heroes: ["1", "2", "3", "4", "5", "6"],
  };
  render() {
    return (
      <div className="container">
        <div style={{ marginTop: "40px" }}>
          <div className="row">{this.showHeroes()}</div>
        </div>
      </div>
    );
  }
  showHeroes() {
    return this.state.heroes.map((hero, key) => <Hero key={key} hero={hero} />);
  }
}

export default Heroes;
