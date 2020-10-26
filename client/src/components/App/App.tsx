import React from "react";
import "./App.sass";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { Column, Columns } from "trunx";
import SideMenu from "../SideMenu/SideMenu";
import Foot from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import {ROUTES} from "../../constants/routes"; 

function App() {
  return (
    <div className="app" role="app">
      <Navbar />
      <Columns isGapless>
        <Column isOneFifthDesktop>
          <SideMenu></SideMenu>
        </Column>
        <Column>
          <Switch>
            <Route exact path={ROUTES.HOME}>HOME</Route>
            <Route path={ROUTES.LOGIN}>LOGIN</Route>
            <Route path={ROUTES.SIGN_UP}>SIGN UP</Route>
            <Route path={ROUTES.MY_PICKS}>MY PICKS</Route>
            <Route path={ROUTES.MY_GROUPS}>MY GROUPS</Route>
            <Route path={ROUTES.NEW_GROUP}>NEW GROUP</Route>
            <Route path={ROUTES.JOIN_GROUP}>JOIN GROUP</Route>
          </Switch>
        </Column>
      </Columns>
      <Foot />
    </div>
  );
}

export default App;
