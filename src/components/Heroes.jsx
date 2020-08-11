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
            {this.state.allAvengers.length > 0 ? (
              this.state.allAvengers.map((avenger, i) => (
                <Hero
                  key={i}
                  avenger={avenger}
                  onDelete={() => this.deleteAvenger(avenger.id)}
                  onLike={() => this.likeAvenger(avenger)}
                />
              ))
            ) : (
              <h3 style={{ textAlign: "center", width: "100%" }}>
                No Avengers Available!
              </h3>
            )}
          </div>
        </div>
      </div>
    );
  }

  async likeAvenger(avenger) {
    await axios
      .put(`http://localhost:5000/api/heroes/${avenger.id}`, {
        likeCount: avenger.likeCount + 1,
      })
      .then((res) => {
        let allAvengers = [...this.state.allAvengers];
        let index = allAvengers.indexOf(avenger);
        allAvengers[index] = { ...avenger };
        allAvengers[index].likeCount++;
        this.setState({ allAvengers: allAvengers });
      });
  }

  async deleteAvenger(avengerid) {
    let res = window.confirm("Are you sure to delete ?");

    if (res) {
      await axios
        .delete(`http://localhost:5000/api/heroes/${avengerid}`)
        .then((res) => {
          //this.getAvengers();
          let newAvengers = this.state.allAvengers.filter(
            (avenger) => avenger.id !== avengerid
          );
          this.setState({ allAvengers: newAvengers });
        });
    }
  }

  async getAvengers() {
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

  componentDidMount() {
    this.getAvengers();
  }
}

export default Heroes;
