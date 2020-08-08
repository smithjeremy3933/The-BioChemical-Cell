import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Signout from "./auth/Signout";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import HomePage from "./pages/HomePage";
import Header from "./Header";

const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Signup} />
            <Route path="/homepage" exact component={HomePage} />
            <Route path="/signout" exact component={Signout} />
            <Route path="/signin" exact component={Signin} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
