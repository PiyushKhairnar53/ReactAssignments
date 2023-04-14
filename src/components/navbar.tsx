import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <h2 className="navbar-title">Grocery App</h2>
        <img className="profile-img" src="/dotnet.png"></img>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;