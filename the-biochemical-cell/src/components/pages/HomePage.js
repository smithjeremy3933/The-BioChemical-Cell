import React from "react";
import { connect } from "react-redux";
import requireAuth from "../requireAuth";
import SideMenu from "../SideMenu";

class HomePage extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-one-fifth">
          <SideMenu />
        </div>
        <div className="column">Home Page Content</div>
      </div>
    );
  }
}

export default requireAuth(connect(null)(HomePage));
