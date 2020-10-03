import React from "react";
import "./App.sass";
import { Navbar } from "../Navbar/Navbar";
import { Column, Columns } from "trunx";
import SideMenu from "../SideMenu/SideMenu";

function App() {
  return (
    <div className="App" role="app">
      <Navbar />
      <Columns isGapless>
        <Column isOneQuarter>
          <SideMenu></SideMenu>
        </Column>
        <Column>OK</Column>
      </Columns>
    </div>
  );
}

export default App;
