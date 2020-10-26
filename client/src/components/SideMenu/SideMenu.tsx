import { faFootballBall, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Section } from "trunx";
import "./SideMenu.scss";
import {ROUTES} from "../../constants";

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
              <Link to={ROUTES.MY_PICKS}>Make Picks</Link>
            </li>
          </Menu.List>
          <Menu.Label>
            <FontAwesomeIcon icon={faUsers} /> Groups
          </Menu.Label>
          <Menu.List>
            <li>
              <Link to={ROUTES.MY_GROUPS}>My Groups</Link>
            </li>
            <li>
              <Link to={ROUTES.NEW_GROUP}>Create Group</Link>
            </li>
            <li>
              <Link to={ROUTES.JOIN_GROUP}>Join Group</Link>
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
