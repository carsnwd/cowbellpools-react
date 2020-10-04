import { faFootballBall, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
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
              <a>Make Picks</a>
            </li>
            <li>
              <a>View Picks</a>
            </li>
          </Menu.List>
          <Menu.Label>
            <FontAwesomeIcon icon={faUsers} /> Groups
          </Menu.Label>
          <Menu.List>
            <li>
              <a>My Groups</a>
            </li>
            <li>
              <a>Create Group</a>
            </li>
            <li>
              <a>Join Group</a>
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
