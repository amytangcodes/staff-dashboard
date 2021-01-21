import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import DynamicLayoutRoute from "./pages/DynamicLayoutRoute.js";
import Dashboard from "./pages/Dashboard";
import SettingsPage from "./pages/SettingsPage";
import LoggedOutPage from "./pages/LoggedOutPage";
import Login from "./components/Login";

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
      <div className="container">
        <BrowserRouter>
          <Switch>
            {/* Logged Out Nav */}
            <DynamicLayoutRoute
              path="/signup"
              exact
              render={() => <LoggedOutPage />}
              layout="NAV"
            />
            <DynamicLayoutRoute
              path="/login"
              exact
              render={() => <Login />}
              layout="NAV"
            />

            {/* Logged In Nav */}
            <DynamicLayoutRoute
              path="/dashboard"
              exact
              render={() => (
                <Dashboard
                  isLoading={appState.loading}
                  staff={appState.staff}
                />
              )}
              layout="DASH_BOARD_NAV"
            />
            <DynamicLayoutRoute
              path="/"
              exact
              render={() => (
                <Dashboard
                  isLoading={appState.loading}
                  staff={appState.staff}
                />
              )}
              layout="DASH_BOARD_NAV"
            />
            <DynamicLayoutRoute
              path="/settings"
              exact
              render={() => <SettingsPage />}
              layout="DASH_BOARD_NAV"
            />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
