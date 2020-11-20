import "../common/template/dependencies";

import { HashRouter } from "react-router-dom";
import React from "react";
import Header from "../common/template/header";
import SideBar from "../common/template/sideBar";
import Footer from "../common/template/footer";
import Router from "./routes";

export default (props) => (
  <HashRouter>
    <div className="wrapper">
      <Header />
      <SideBar />
      <Router />
      <Footer />
    </div>
  </HashRouter>
);
