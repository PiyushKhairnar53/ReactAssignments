import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <h4 className="navbar-title">Customer Location App</h4>
        <img className="profile-img" src="/dotnet.png"></img>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;