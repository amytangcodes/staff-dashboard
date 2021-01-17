import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";
import Aboutpage from "./component/Aboutpage";
import "./styles/App.scss";

const App = () => {
  const [appState, setAppState] = useState({
    loading: false,
    staff: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "https://castandcrew.herokuapp.com/people";
    fetch(proxyurl + apiUrl)
      .then((response) => response.json())
      .then((staff) => {
        setAppState({
          loading: false,
          staff: staff,
        });
      })
      .catch(() =>
        console.log("Can’t access " + apiUrl + " response. Blocked by browser?")
      );
  }, [setAppState]);

  return (
    <div className="App">
      <Container>
        <Router>
          <Navbar />
          <div className="page-container">
            <Route
              path="/"
              exact
              render={() => (
                <Dashboard
                  isLoading={appState.loading}
                  staff={appState.staff}
                />
              )}
            />
            <Route path="/about" exact render={() => <Aboutpage />} />
          </div>
        </Router>
      </Container>
    </div>
  );
};

export default App;
