import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Container } from "@mui/material";
import { NavBar } from "./common/NavBar";
import { BrowserRouter } from "react-router-dom";
import { HandleRouter } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <HandleRouter />
    </BrowserRouter>
  );
}

export default App;
