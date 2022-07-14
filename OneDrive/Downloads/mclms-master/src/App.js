import "./App.css";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";


//import Login from "./components/auth/Login";
//import Register from "./components/auth/Register";
//import Verification from "./components/auth/Verification"
//import Home from "./components/auth/Home"
//import Verified from "./components/auth/Verified";
import Public from "./Router/Public";
//import Home from "./components/auth/Home";


function App() {
  return (
    <Router>
     <div className= "App">
      <Public />
      </div>
    </Router>
  );
}

export default App;

