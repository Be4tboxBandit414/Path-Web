import Landing from "./Components/Landing";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";

import { Container } from "./styles";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
        <Navigation />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
