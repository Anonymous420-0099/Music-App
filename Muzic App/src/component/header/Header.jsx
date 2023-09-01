import React from "react";
import CenterMenu from "../centerMenu/centerMenu";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      {/* image */}
      <img src={require("../../assets/MuzicLogo.png")} alt="" />
      {/* centerMenu */}
      <CenterMenu />
      {/* buttons */}
      <div className="buttons">
        <button>Sign In</button>
        <button>Log In</button>
      </div>
    </div>
  );
};
export default Header;
