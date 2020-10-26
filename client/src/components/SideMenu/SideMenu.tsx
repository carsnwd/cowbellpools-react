import { faFootballBall, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Section } from "trunx";
import "./SideMenu.scss";

export default class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
        <Menu>
          <Menu.Label>
            <FontAwesomeIcon icon={faFootballBall} /> Picks
          </Menu.Label>
          <Menu.List>
            <li>
              <Link to="/mypicks">Make Picks</Link>
            </li>
          </Menu.List>
          <Menu.Label>
            <FontAwesomeIcon icon={faUsers} /> Groups
          </Menu.Label>
          <Menu.List>
            <li>
              <Link to="/mygroups">My Groups</Link>
            </li>
            <li>
              <Link to="/newgroup">Create Group</Link>
            </li>
            <li>
              <Link to="/joingroup">Join Group</Link>
            </li>
          </Menu.List>
        </Menu>
        <Section>
          <div className="a-block"></div>
        </Section>
      </div>
    );
  }
}
