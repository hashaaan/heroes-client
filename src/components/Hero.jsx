import React, { Component } from "react";
import { Link } from "react-router-dom";

class Hero extends Component {
  state = {
    heroId: this.props.avenger._id,
  };
  render() {
    const { avenger } = this.props;

    return (
      <div className="col-sm-4">
        <div className="card" style={{ marginBottom: "30px" }}>
          <img
            className="card-img-top"
            src={avenger.imgUrl ? avenger.imgUrl : "assets/img/hulk.jpg"}
            alt="..."
            style={{ height: "420px" }}
          />
          <div className="card-body">
            <Link to={`/heroes/${avenger.id}`}>
              <h5 className="card-title">{avenger.name}</h5>
            </Link>
            <h6>{avenger.birthname}</h6>

            <ul>{this.showMovies()}</ul>
            <button className="btn btn-primary" onClick={this.props.onLike}>
              Like{" "}
              <span className="badge badge-light">{avenger.likeCount}</span>
            </button>
            <button
              style={{ marginLeft: "10px" }}
              className="btn btn-danger"
              onClick={this.props.onDelete}
            >
              Delete
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
    const { avenger } = this.props;

    if (avenger.movies.length === 0) {
      return <p>No movies available</p>;
    }
    return avenger.movies.map((movie, key) => <li key={key}>{movie}</li>);
  }
}

export default Hero;
