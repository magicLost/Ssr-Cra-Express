import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./component/test/Test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Test items={[1, 2, 3, 4, 5, 6, 7]} />
    </div>
  );
}

export default App;
