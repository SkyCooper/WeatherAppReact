import React from "react";
import Icon from "../assests/avatar.png"

const Header = () => {
  return (
    <section className="top-banner">
      <div className="container">
        <center>
          <img
            src={Icon}
            alt="Bank logo"
            className="nav__logo"
            id="logo"
          />
          <h1 className="heading">Weather App</h1>
        </center>
      </div>
    </section>
  );
};

export default Header;
