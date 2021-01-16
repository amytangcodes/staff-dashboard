import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

import Homepage from "./component/Homepage";
import Aboutpage from "./component/Aboutpage";
import "./App.scss";

class App extends Component {
  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "https://castandcrew.herokuapp.com/people";
    fetch(proxyurl + apiUrl)
      .then((response) => response.json())
      .then((data) => console.log(data.collection))
      .catch(() =>
        console.log("Can’t access " + apiUrl + " response. Blocked by browser?")
      );
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route path="/" exact render={() => <Homepage />} />
          <Route path="/about" exact render={() => <Aboutpage />} />
        </Router>
      </div>
    );
  }
}

export default App;
