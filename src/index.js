import React, { Component } from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom";
//import Card from "./card";
import "tachyons";
import App from "./app";
import "./style.css";
import "./app.css";
const rootElement = document.getElementById("root");
 const root = createRoot(rootElement);
 root.render(
  <StrictMode>
  <App />
  </StrictMode>
   );
