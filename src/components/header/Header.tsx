import React from "react";
import buss from "../../img/buss.png";
import "./Header.css";

function Header() {
  return (
    <header className="app-header">
      <div className="app-nav">
        <span style={{ paddingRight: 10 }}>PLANKEBUSS</span>
        <img height={30} src={buss} alt="buss-logo" />
      </div>
    </header>
  );
}

export default Header;
