import { faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Button } from "trunx";
import "./NavbarEnd.scss";

type NavbarEndState = {
  isLoginModalActive: boolean;
};

export default class NavbarEnd extends Component<{}, NavbarEndState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.state = {
      isLoginModalActive: false,
    };
  }

  toggleLoginModal() {
    this.setState((prevState: NavbarEndState) => ({
      isLoginModalActive: !prevState.isLoginModalActive,
    }));
  }

  render() {
    return (
      <div className="navbar-end">
        <div className="navbar-item">
          <Button onClick={this.toggleLoginModal} isLight isMedium>
            <FontAwesomeIcon icon={faUser} /> Log In
          </Button>
        </div>
        <div className="navbar-item">
          <Button onClick={this.toggleLoginModal} isPrimary isMedium>
            <FontAwesomeIcon icon={faSignInAlt} /> Sign Up
          </Button>
        </div>
      </div>
    );
  }
}
