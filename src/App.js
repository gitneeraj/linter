import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";

import { Routes } from "./routes";

import "react-toastify/dist/ReactToastify.css";
import "./styles/base.scss";

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <Routes />
    </Fragment>
  );
}

export default App;
