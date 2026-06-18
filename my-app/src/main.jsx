/* import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

import React from "react";
import ReactDOM from "react-dom/client";
// 1. Import it with a Capitalized name matching your component
import Exp9_Counter from "./exp9"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Exp9_Counter /> 
  </React.StrictMode>
);