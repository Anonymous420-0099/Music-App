import React from "react";
import "./DownloadAds.css";
const DownloadAds = () => {
  return (
    <div className="downloads">
      <div className="downloadImg">
        <img src={require("../../assets/App Store.png")} alt="" />
        <img src={require("../../assets/Google Play.png")} alt="" />
      </div>
    </div>
  );
};
export default DownloadAds;
