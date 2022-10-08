import React from "react";
import "./styles.css";

import Dashboard from "./Pages/Dash";

export default function App() {
  return (
    <div className="App">
      <Dashboard data="temperature" />
    </div>
  );
}
