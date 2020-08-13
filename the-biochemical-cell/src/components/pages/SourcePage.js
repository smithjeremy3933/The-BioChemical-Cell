import React from "react";
import { connect } from "react-redux";
import SideMenu from "../SideMenu";

class SourcePage extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-one-fifth">
          <SideMenu />
        </div>
        <div className="column" style={{ marginTop: 52 }}>
          Source Page Content
        </div>
      </div>
    );
  }
}

export default connect(null)(SourcePage);
