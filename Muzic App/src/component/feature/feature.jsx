import React from "react";
import "./feature.css";
import { motion } from "framer-motion";
const Feature = ({ icon, title }) => {
  return (
    <div className="feature">
      <motion.div
        initial={{
          transform: "scale(0.5)"
        }}
        whileInView={{
          transform: "scale(1)"
        }}
        transition={{
          duration: 1,
          type: "ease-out"
        }}
        className="icon "
      >
        <img src={icon} alt="" />
      </motion.div>
      <span>{title}</span>
      <span>
        Nunc Elementum,dolor vitailacinia pulvinar augue, felis scelerisque
        lebro, sit amet looret lorem
      </span>
      <span>Learn more</span>
    </div>
  );
};
export default Feature;
