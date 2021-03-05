import React, { useState } from "react";
import Landing from "./Components/Landing";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";

import { Container } from "./styles";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const ThemeContext = React.createContext();

function App() {
  const [navTheme, setNavTheme] = useState("landing");

  return (
    <Router>
      <ThemeContext.Provider value={navTheme}>
        <Container>
          <Switch>
            <Route path="/profile">
              <Profile setNavTheme={setNavTheme} />
            </Route>
            <Route path="/">
              <Landing setNavTheme={setNavTheme} />
            </Route>
          </Switch>
          <Navigation />
          <Footer setNavTheme={setNavTheme} />
        </Container>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
