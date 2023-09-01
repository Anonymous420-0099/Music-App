import React from "react";
import "./musicPlayer.css";
const MusicPlayer = () => {
  return (
    <div className="Mplayer">
      <div className="upperSide">
        <div className="profile">
          <img src={require("../../assets/Mask Group 23.png")} alt="" />
          <div className="details">
            <span>Pain You Make Me</span>
            <span>Unknown Artist</span>
          </div>
        </div>
        <div className="dots">
          <img src={require("../../assets/path.png")} alt="" />
        </div>
      </div>
      <div className="lowerSide">
        <div className="track">
          <span>2 : 30</span>
          <img src={require("../../assets/Group 9.png")} alt="" />
          <span>4 : 30</span>
        </div>
        <div className="controls">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="19">
            <path d="M10 3.116 4 9.611l6 6.496V3.116zM0 0h2v19H0z" />
          </svg>
          <img src={require("../../assets/pause.png")} alt="" />
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="19">
            <path d="M0 3.116v12.991l6-6.496-6-6.495zM8 0h2v19H8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default MusicPlayer;
