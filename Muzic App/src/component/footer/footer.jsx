import React from "react";
import "./footer.css";
import CenterMenu from "../centerMenu/centerMenu";
import { Facebook, YouTube, LinkedIn, Twitter } from "@material-ui/icons";
const Footer = () => {
  return (
    <div className="footer">
      <CenterMenu />
      <div className="socialIcons">
        <div className="facebook">
          <Facebook />
        </div>
        <div className="twitter">
          <Twitter />
        </div>
        <div className="youtube">
          <YouTube />
        </div>
        <div className="linkedIn">
          <LinkedIn />
        </div>
      </div>
      <span>
        Duis feugiat songo metus, ultrises vulputate nibh veverra egit.
        Vestibulum ollamcorper volutpat various
      </span>
    </div>
  );
};
export default Footer;
