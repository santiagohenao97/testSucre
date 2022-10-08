import React from "react";

import logo from "../Pages/img/plant.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-color">
        <span className="navbar-brand mb-0 h1">
          <img
            src={logo}
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          Test Agricultura UniSucre
        </span>
      </nav>
    </>
  );
};

export default Navbar;
