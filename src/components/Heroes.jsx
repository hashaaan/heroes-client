import React, { Component } from "react";
import axios from "axios";
import Hero from "./Hero";

class Heroes extends Component {
  state = {
    heroes: ["1", "2", "3", "4", "5", "6"],
    allAvengers: [],
  };
  render() {
    return (
      <div className="container">
        <div style={{ marginTop: "40px" }}>
          <div className="row">
            {this.state.allAvengers.map((avenger, i) => (
              <Hero key={i} avenger={avenger} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  showHeroes() {
    return this.state.heroes.map((hero, key) => <Hero key={key} hero={hero} />);
  }

  async componentDidMount() {
    let { data } = await axios.get("http://localhost:5000/api/heroes");
    console.log(data);

    let avengers = data.map((avenger) => {
      return {
        id: avenger._id,
        imgUrl: avenger.imgUrl,
        name: avenger.name,
        birthname: avenger.birthname,
        likeCount: avenger.likeCount,
        movies: avenger.movies,
      };
    });

    this.setState({ allAvengers: avengers });
  }
}

export default Heroes;
