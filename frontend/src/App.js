import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Navigation from "./components/shared/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register" >
          <Register />
        </Route>
        <Route path="/login" >
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
