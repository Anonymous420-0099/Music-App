import React from "react";
import "./hero.css";
import DownloadAds from "../downloadAds/DownloadAds";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 1, type: "ease-out" };
  return (
    <div className="wrapper">
      <div className="headings">
        <span>Experience the</span>
        <span>
          <b>Best Quality Music</b>
        </span>
        <span>
          Donec Loret nec valet vequa aliquam.Ut quis tincidunt purus
          <br />
          suspendise in leo non resus ticident lobortis
        </span>
        <div className="download">
          <span>Download now on Android and IOS</span>
          <DownloadAds />
        </div>
      </div>
      <div className="images">
        <motion.div
          initial={{ right: "-19rem" }}
          whileInView={{
            right: "-15rem"
          }}
          transition={transition}
        >
          <img src={require("../../assets/backgraphics.png")} alt="" />
        </motion.div>
        <motion.div>
          <img src={require("../../assets/p 1.png")} alt="" />
        </motion.div>
        <motion.div
          transition={transition}
          initial={{ left: "147px" }}
          whileInView={{ left: "190px" }}
        >
          <img src={require("../../assets/p 2.png")} alt="" />
        </motion.div>
        <motion.div
          transition={transition}
          initial={{ right: "8.5rem" }}
          whileInView={{ right: "6.5rem" }}
        >
          <img src={require("../../assets/p 3.png")} alt="" />
        </motion.div>
        <motion.div
          transition={transition}
          initial={{ left: "7rem" }}
          whileInView={{ left: "4rem" }}
        >
          <img src={require("../../assets/p 4.png")} alt="" />
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
