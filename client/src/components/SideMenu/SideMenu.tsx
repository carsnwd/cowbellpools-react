import React, { Component } from "react";
import { Li, Menu } from "trunx";

export default class SideMenu extends Component {
  render() {
    return (
      <Menu>
        <Menu.List>
          <Li>Foo</Li>
          <Li>Bar</Li>
        </Menu.List>
      </Menu>
    );
  }
}
