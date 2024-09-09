import React, { useState } from "react";
import { animate, delay, motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Element } from "react-scroll";

const SkillsData = [
  {
    Text: "REACT JS",
    Color: "61DBFB",
    knowledgePercent: 85,
  },
  {
    Text: "NODE JS",
    Color: "3c873a",
    knowledgePercent: 70,
  },
  {
    Text: "EXPRESS JS",
    Color: "f0cf00",
    knowledgePercent: 70,
  },
  {
    Text: "JAVASCRIPT",
    Color: "efd81d",
    knowledgePercent: 80,
  },
  {
    Text: "MONGO DB",
    Color: "00684a",
    knowledgePercent: 80,
  },
  {
    Text: "CSS",
    Color: "264de4",
    knowledgePercent: 80,
  },
  {
    Text: "PYTHON",
    Color: "4584b6",
    knowledgePercent: 65,
  },
  {
    Text: "FIREBASE",
    Color: "f6820d",
    knowledgePercent: 65,
  },
  {
    Text: "FIGMA",
    Color: "f24e1e",
    knowledgePercent: 65,
  },
  {
    Text: "GIT & GITHUB",
    Color: "FAFBFC",
    knowledgePercent: 70,
  },
];

const animationSkills = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (ids) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * ids,
    },
  }),
};

const fadeInAnimationSkills = {
  initial: {
    opacity: 0,
    width: 0,
  },
  animate: ({ knowledgePercent, ids }) => ({
    opacity: 1,
    width: `${knowledgePercent}%`,
    transition: {
      delay: 0.25 * ids,
    },
  }),
};

const Skills = ({ setActiveNavbar, fadeInAnimationSection }) => {
  return (
    <Element name="Skills" id="Skills">
      {/* <section id="Skills" onMouseEnter={() => setActiveNavbar("Skills")}> */}
      <motion.div
        variants={fadeInAnimationSection}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <SectionHeader
          heading={"Skills"}
          description={
            "Proficient in React JS, Express JS, MongoDB, Typescript, CSS, JavaScript, and HTML5. Experienced with development tools like Git, VS Code, and cloud platforms such as Cloudinary and Firebase."
          }
        />
        <div id="cardsCollection">
          {SkillsData.map((curr, ids) => {
            return (
              <motion.div
                key={ids}
                variants={animationSkills}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={ids}
              >
                <div id="SkillInfo">
                  <p>{curr.Text}</p>
                  <p>{curr.knowledgePercent}%</p>
                </div>
                <div id="progress-bar-wrap">
                  <motion.div
                    id="progress-bar"
                    style={{
                      backgroundColor: `#${curr.Color}`,
                    }}
                    variants={fadeInAnimationSkills}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={{ knowledgePercent: curr.knowledgePercent, ids }}
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      {/* </section> */}
    </Element>
  );
};

export default Skills;
