import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";
import Aboutpage from "./component/Aboutpage";
import "./styles/App.scss";

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
        <Container>
          <Router>
            <Navbar />
            <div className="page-container">
              <Route path="/" exact render={() => <Dashboard />} />
              <Route path="/about" exact render={() => <Aboutpage />} />
            </div>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
