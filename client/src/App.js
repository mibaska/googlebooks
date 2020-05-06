import React from "react";
import "./App.css";
import Search from "./pages/search";
import Saved from "./pages/saved";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron"
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Jumbotron />
      <Route exact path={["/", "/search"]} component={Search} />
      <Route exact path={"/saved"} component={Saved} />
    </BrowserRouter>
  );
}


export default App;
