import React from "react";
import "./experience.css";
import Feature from "../feature/feature";
const Experience = () => {
  return (
    <div className="Experience">
      <img src={require("../../assets/Path 318.png")} alt="" />
      <div className="headings1">
        <span>An Amazing App Can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>
      <div className="features">
        <Feature
          icon={require("../../assets/Group 2.png")}
          title="For Live Music"
        />
        <Feature
          icon={require("../../assets/music icon.png")}
          title="For Daily Music"
        />
        <Feature
          icon={require("../../assets/Group 4.png")}
          title="For Artists"
        />
      </div>
    </div>
  );
};
export default Experience;
