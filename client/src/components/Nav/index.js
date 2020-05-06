import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <h5>Google Books Search</h5>
      <a className="navbar-brand" href="/search">Search</a>
      <a className="navbar-brand" href="/saved">Saved</a>
    </nav>
  );
}

export default Nav;