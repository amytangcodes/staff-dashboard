import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import DynamicLayoutRoute from "./components/pages/DynamicLayoutRoute.js";
import Dashboard from "./components/pages/Dashboard";
import SettingsPage from "./components/pages/SettingsPage";
import LoggedOutPage from "./components/pages/LoggedOutPage";
import Login from "./components/Login";

import "./styles/App.scss";

const fakeData = [
  {
    message: "FAKE DATA",
    collection: [
      { id: 1, name: "Tressie Stark", email: "collene@reynolds.com" },
      { id: 2, name: "Allie Nikolaus", email: "neta@gutkowskihowell.org" },
      { id: 3, name: "Joi Braun", email: "joleen@parkertorphy.biz" },
      { id: 4, name: "Mrs. Wade Labadie", email: "juan@lefflerlabadie.biz" },
      { id: 5, name: "Mr. Dewayne Bruen", email: "rea@ritchie.com" },
      { id: 6, name: "Clarita Kub DVM", email: "titus@corwin.io" },
      { id: 7, name: "Agueda Streich", email: "cecilleschuster@turner.biz" },
      {
        id: 8,
        name: "Belia Daugherty",
        email: "shavonne@schmelerwintheiser.name",
      },
      { id: 9, name: "Chance Wisoky", email: "lory@toy.co" },
      { id: 10, name: "Numbers Altenwerth", email: "penney@beckermaggio.info" },
      { id: 11, name: "Ms. Dan Hane", email: "albertothiel@jerde.net" },
      {
        id: 12,
        name: "Ms. Ferdinand Bradtke",
        email: "franklinfisher@romagueramarquardt.net",
      },
      { id: 13, name: "Madelyn Batz", email: "marlinharris@okuneva.org" },
      { id: 14, name: "Lyman Weissnat", email: "myeshafahey@jonesullrich.net" },
      {
        id: 15,
        name: "Timothy Ziemann PhD",
        email: "dewaynepollich@kiehn.com",
      },
      {
        id: 16,
        name: "Alfonso Simonis",
        email: "christiniawilliamson@walker.net",
      },
      { id: 17, name: "Rosetta Hessel", email: "rainaeffertz@langworth.org" },
      { id: 18, name: "Rueben Jerde", email: "ramirokunde@fisher.com" },
      { id: 19, name: "Colton Abshire", email: "yon@runolfonsauer.name" },
      { id: 20, name: "Carlotta Gerlach", email: "german@mrazjacobi.com" },
    ],
  },
];

const App = () => {
  // const [appState, setAppState] = useState({
  //   loading: false,
  //   staff: null,
  // });

  // useEffect(() => {
  //   setAppState({ loading: true });
  //   const proxyurl = "https://cors-anywhere.herokuapp.com/";
  //   const apiUrl = fakeData;
  //   fetch(proxyurl + apiUrl)
  //     .then((response) => response.json())
  //     .then((staff) => {
  //       setAppState({
  //         loading: false,
  //         staff: staff,
  //       });
  //     })
  //     .catch(() =>
  //       console.log("Can’t access " + apiUrl + " response. Blocked by browser?")
  //     );
  // }, [setAppState]);

  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Switch>
            <DynamicLayoutRoute
              path="/"
              exact
              render={() => (
                <Dashboard
                  // isLoading={appState.loading}
                  staff={fakeData}
                />
              )}
              layout="DASH_BOARD_NAV"
            />
            <DynamicLayoutRoute
              path="/signup"
              exact
              render={() => <LoggedOutPage />}
              layout="NAV"
            />

            <DynamicLayoutRoute
              path="/dashboard"
              exact
              render={() => (
                <Dashboard
                  // isLoading={appState.loading}
                  staff={fakeData}
                />
              )}
              layout="DASH_BOARD_NAV"
            />
            <DynamicLayoutRoute
              path="/settings"
              exact
              render={() => <SettingsPage />}
            />
            <DynamicLayoutRoute
              path="/login"
              exact
              render={() => <Login />}
              layout="NAV"
            />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
