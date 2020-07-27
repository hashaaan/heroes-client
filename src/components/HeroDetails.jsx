import React, { Component } from "react";

class HeroDetails extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <h4 style={{ textAlign: "center", marginTop: "20px" }}>
          Hero {match.params.id}
        </h4>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginTop: "20px",
          }}
        >
          <button
            className="btn btn-success"
            style={{ marginRight: "15px" }}
            onClick={this.goBack}
          >
            Go Back!
          </button>
          <button className="btn btn-info" onClick={this.goHome}>
            Go Home!
          </button>
        </div>
      </div>
    );
  }

  goHome = () => {
    this.props.history.push("/");
  };

  goBack = () => {
    this.props.history.goBack();
  };
}

export default HeroDetails;
