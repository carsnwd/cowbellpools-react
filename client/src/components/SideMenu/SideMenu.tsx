import React, { Component } from "react";
import { Li, Menu } from "trunx";
import "./SideMenu.scss";

export default class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
        <Menu>
          <Menu.List>
            <Li>Foo</Li>
            <Li>Bar</Li>
          </Menu.List>
        </Menu>
      </div>
    );
  }
}
