import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

class Header extends React.Component {
  renderAuthBtns() {
    if (this.props.authenticated) {
      return (
        <div className="button">
          <Link to="/signout" className="button is-primary">
            <strong>Sign Out</strong>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="buttons">
          <Link to="/" className="button is-primary">
            <strong>Sign up</strong>
          </Link>
          <Link to="/signin" className="button is-light">
            Sign in
          </Link>
        </div>
      );
    }
  }

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div className="navbar-start">
          <Link to="/homepage" className="navbar-item">
            Home
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>
            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar-start">
          <Link to="/sources" className="navbar-item">
            Sources
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>
            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <NavBox className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          {this.renderLinks()}
          <div className="navbar-end">
            <div className="navbar-item">{this.renderAuthBtns()}</div>
          </div>
        </div>
      </NavBox>
    );
  }
}

const NavBox = styled.nav`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
`;

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
