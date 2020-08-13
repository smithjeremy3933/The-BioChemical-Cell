import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { SideMenuBox } from "./styled-components/SideMenuStyled";

class SideMenu extends React.Component {
  render() {
    return (
      <SideMenuBox className="menu">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <Link to="/homepage">Homepage</Link>
          </li>
          <li>
            <Link to="/sources">Sources</Link>
          </li>
        </ul>
        <p className="menu-label">Topics</p>
        <ul className="menu-list">
          <li>
            <Link to="/aminoacid">Amino Acid</Link>
          </li>
          <li>
            <a>Manage Your Team</a>
            <ul>
              <li>
                <a>Members</a>
              </li>
              <li>
                <a>Plugins</a>
              </li>
              <li>
                <a>Add a member</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Invitations</a>
          </li>
          <li>
            <a>Cloud Storage Environment Settings</a>
          </li>
          <li>
            <a>Authentication</a>
          </li>
        </ul>
        <p className="menu-label">Transactions</p>
        <ul className="menu-list">
          <li>
            <a>Payments</a>
          </li>
          <li>
            <a>Transfers</a>
          </li>
          <li>
            <a>Balance</a>
          </li>
        </ul>
      </SideMenuBox>
    );
  }
}

export default connect(null)(SideMenu);
