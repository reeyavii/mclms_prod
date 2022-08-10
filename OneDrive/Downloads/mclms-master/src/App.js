import "./App.css";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";


//import Public from "./Router/Public";
import Private from "./Router/Private";




function App() {
  return (
    <Router>
     <div className= "App">
      <Private />
      </div>
    </Router>
  );
}

export default App;

