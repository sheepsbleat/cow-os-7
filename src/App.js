import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import CowClicker from "./components/pages/apps/CowClicker";
import CowTalk from "./components/pages/CowTalk";

function App() {
  return (
    <div className="App">
      <AppBar position="sticky" className="nav">
        <Toolbar>
          <Link to="/">
            <Typography variant="h6">Home</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cow-clicker" component={CowClicker} />
        <Route path="/chat" component={CowTalk} />
        <Route
          render={() => (
            <Typography
              style={{ textAlign: "center" }}
              variant="h2"
              gutterBottom
            >
              Moo! (404 page not found)
            </Typography>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
