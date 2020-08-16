import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { SideMenuBox, LinkText } from "./styled-components/SideMenuStyled";

class SideMenu extends React.Component {
  render() {
    return (
      <SideMenuBox className="menu">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <Link to="/homepage">
              <LinkText>Homepage</LinkText>
            </Link>
          </li>
          <li>
            <Link to="/sources">
              <LinkText>Sources</LinkText>
            </Link>
          </li>
        </ul>
        <p className="menu-label">Topics</p>
        <ul className="menu-list">
          <li>
            <Link to="/aminoacid">
              <LinkText>Amino Acid</LinkText>
            </Link>
          </li>
        </ul>
      </SideMenuBox>
    );
  }
}

export default connect(null)(SideMenu);
