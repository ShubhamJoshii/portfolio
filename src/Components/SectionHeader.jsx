import React from "react";
import { motion } from "framer-motion";

const lineAnimation = {
  initial: {
    opacity: 1,
    x: "-130%",
    y:0
},
animate: {
    opacity: 1,
    x: ['-130%', '50%', '-50%'],
    y:0,
    transition: {
      delay: 1,
    },
  },
};

const SectionHeader = ({ heading, description = null }) => {
  return (
    <div className="SectionHeader">
      <div id="heading">
        <h2>
          {heading}
          <div id="lines">
            <motion.span
              id="front-line"
              variants={lineAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            ></motion.span>
          </div>
        </h2>
      </div>
      {description && <p id="description">{description}</p>}
    </div>
  );
};

export default SectionHeader;
