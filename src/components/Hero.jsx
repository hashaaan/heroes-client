import React, { Component } from "react";

class Hero extends Component {
  state = { heroId: 99 };
  render() {
    return (
      <>
        <h1>Avengers incoming ... </h1>
        <button className="btn btn-primary">
          Click Here! {this.state.heroId}
        </button>
      </>
    );
  }
}

export default Hero;
