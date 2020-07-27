import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
//import App from './App';
import Heroes from "./components/Heroes";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import HeroDetails from "./components/HeroDetails";
import * as serviceWorker from "./serviceWorker";
//import Hero from "./components/Hero";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/heroes" component={Heroes} />
      <Route exat path="/heroes/:id" component={HeroDetails} />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
