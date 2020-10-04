import React from "react";
import "./App.sass";
import "./App.scss";
import { Navbar } from "../Navbar/Navbar";
import { Column, Columns, Content, Footer } from "trunx";
import SideMenu from "../SideMenu/SideMenu";

function App() {
  return (
    <div className="app" role="app">
      <Navbar />
      <Columns isGapless>
        <Column isOneFifthDesktop>
          <SideMenu></SideMenu>
        </Column>
        <Column>OK</Column>
      </Columns>
      <Footer>
        <Content>
          <p>
            <strong>Trunx</strong> by{" "}
            <a href="http://g14n.info">Gianluca Casati</a>. The source code is
            licensed <a href="http://g14n.info/mit-license">MIT</a>.
          </p>
        </Content>
      </Footer>
    </div>
  );
}

export default App;
