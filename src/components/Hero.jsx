import React, { Component } from "react";

class Hero extends Component {
  state = {
    heroId: -189,
    //movies: [],
    movies: ["Hulk 2003", "The Incredible Hulk", "Justice League"],
    likeCount: 0,
  };
  render() {
    return (
      <div className="col-sm-4">
        <div className="card" style={{ marginBottom: "30px" }}>
          <img className="card-img-top" src="assets/img/hulk.jpg" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Hulk</h5>
            <h6>Dr. Bruce Banner</h6>
            <ul>{this.showMovies()}</ul>
            <button
              className="btn btn-primary"
              onClick={() => this.likeAvenger(1)}
            >
              Like{" "}
              <span className="badge badge-light">{this.state.likeCount}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  isHero() {
    return this.state.heroId < 0 ? "Not an avenger" : "Is an avenger";
  }
  showMovies() {
    if (this.state.movies.length === 0) {
      return <p>No movies available</p>;
    }
    return this.state.movies.map((movie, key) => <li key={key}>{movie}</li>);
  }
  likeAvenger = (counter) => {
    this.setState({ likeCount: this.state.likeCount + counter });
  };
}

export default Hero;
