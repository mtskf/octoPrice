import React from "react";
import "./App.scss";
import Cloud from "./pages/pricing/components/CloudPricing";
import Server from "./pages/pricing/components/ServerPricing";

function App() {
  return (
    <div style={{ margin: "50px" }}>
      <h1>Pricing Page</h1>
      <div>
        <Cloud />
        <Server />
      </div>
    </div>
  );
}

export default App;
