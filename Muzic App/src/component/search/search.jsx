import React from "react";
import "./search.css";
import MusicPlayer from "../musicPlayer/musicPlayer";
const Search = () => {
  return (
    <div className="search">
      <div className="left">
        <img src={require("../../assets/backgraphics.png")} alt="" />
        <img src={require("../../assets/d1.png")} alt="" />
        <img src={require("../../assets/d2.png")} alt="" />
        <img src={require("../../assets/d3.png")} alt="" />
        <img src={require("../../assets/d4.png")} alt="" />
      </div>
      <div className="right">
        <div className="searchbar">
          <input type="text" placeholder="Enter the Keyword or URL" />
          <div className="searchIcon">
            <img src={require("../../assets/search.png")} alt="" />
          </div>
        </div>
        <div className="tild">
          <img src={require("../../assets/Path 318.png")} alt="" />
        </div>
        <div className="detail">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span>
            Duis congue fuegiat metus, ultrisus vulputate <br /> nibh vivera
            egat vistibulum ullalcomper <br />
            voluteput VarisS
          </span>
        </div>
        <MusicPlayer />
      </div>
    </div>
  );
};
export default Search;
