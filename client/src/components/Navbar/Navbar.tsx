import React from "react";
import "./Navbar.scss";
import { Button } from "../Button/Button";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @name NavbarState
 * @description Holds the state of Navbar not pertinant to rest of app.
 * @property {boolean} isHamburgerActive - Weither the hamburger menu is showing or hiding.
 */
type NavbarState = {
  isHamburgerActive: boolean;
};

/**
 * @component
 * @name Navbar
 * @description Encapsulates the Bulma Navbar.
 */
export class Navbar extends React.Component<{}, NavbarState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.toggleBurgerState = this.toggleBurgerState.bind(this);
    this.state = {
      isHamburgerActive: false,
    };
  }
  /**
   * @private
   * @method
   * @name toggleBurgerState
   * @description Toggles the burger menu from showing or hiding.
   */
  toggleBurgerState() {
    this.setState((prevState) => ({ isHamburgerActive: !prevState.isHamburgerActive }));
  }
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io"> 
            <img src={require("./logo.png")} width="187" height="42" />
          </a>
          <a
            role="burger-button"
            className={
              "navbar-burger burger" + (this.state.isHamburgerActive ? " is-active" : "")
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
          className={"navbar-menu" + (this.state.isHamburgerActive ? " is-active" : "")}
          id="main-nav"
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Button
                  classes="button is-light is-medium"
                  icon={faUser}
                  label="Log In"
                  onClickHandler={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
