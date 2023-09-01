import React from "react";
import "./download.css";
import DownloadAds from "../downloadAds/DownloadAds";
const Download = () => {
  return (
    <div className="download1">
      <img src={require("../../assets/Path 318.png")} alt="" />
      <div className="headline">
        <span>Download The Beat Music</span>
        <span>
          <b>App Now!</b>
        </span>
        <span>
          Dues faungiat cogo metus, ultrices vulputate nibh vevera ebit.
          Vestibulum ullamcorper volutpat various.
        </span>
      </div>
      <div className="DAds">
        <DownloadAds />
      </div>
    </div>
  );
};
export default Download;
