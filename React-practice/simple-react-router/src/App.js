import React from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Friend from "./Components/FriendID/Friend";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/friend/:friendId">
          <Friend></Friend>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
      </Router>
    </div>
  );
}

export default App;
