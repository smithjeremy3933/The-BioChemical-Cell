import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Signout from "./auth/Signout";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import HomePage from "./pages/HomePage";
import SourcePage from "./pages/SourcePage";
import AminoAcidPage from "./pages/AminoAcidPage";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Signup} />
            <Route path="/homepage" exact component={HomePage} />
            <Route path="/aminoacid" exact component={AminoAcidPage} />
            <Route path="/sources" exact component={SourcePage} />
            <Route path="/signout" exact component={Signout} />
            <Route path="/signin" exact component={Signin} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
