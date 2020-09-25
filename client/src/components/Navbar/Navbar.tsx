import React from "react";
import "./Navbar.scss";
import { Button } from "../Button/Button";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavbarState = {
  isActive: boolean;
};

export class Navbar extends React.Component<{}, NavbarState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.toggleBurgerState = this.toggleBurgerState.bind(this);
    this.state = {
      isActive: false,
    };
  }
  toggleBurgerState() {
    this.setState((prevState) => ({ isActive: !prevState.isActive }));
  }
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src={require("./logo.png")} width="187" height="42" />
          </a>
          <a
            role="button"
            className={
              "navbar-burger burger" + (this.state.isActive ? " is-active" : "")
            }
            onClick={this.toggleBurgerState}
            aria-label="menu"
            aria-expanded="false"
            data-target="main-nav"
          >
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>

        <div
          className={"navbar-menu" + (this.state.isActive ? " is-active" : "")}
          id="main-nav"
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Button
                  classes="button is-light is-medium"
                  icon={faUser}
                  label="Log In"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
