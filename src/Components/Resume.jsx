import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
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

const Div = ({ MainHeading, data }) => {
  return (
    <div id="resumeSection">
      <motion.h3
        variants={animationSkills}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        {MainHeading}
      </motion.h3>
      <div id="content">
        {data.map((curr, id) => {
          return (
            <div id="content-inner" key={curr.id + id}>
              <motion.h4
                variants={animationSkills}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
              >
                {curr.head}
              </motion.h4>
              {curr.duration && (
                <motion.span
                  id="duration"
                  variants={animationSkills}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                >
                  {curr.duration}
                </motion.span>
              )}
              {curr.location && (
                <motion.p
                  id="location"
                  variants={animationSkills}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                >
                  {curr.location}
                </motion.p>
              )}
              {curr.description.map((desc,index) => {
                return (
                  <motion.p
                  key={index}
                    variants={animationSkills}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                  >
                    {desc}
                  </motion.p>
                );
              })}
              <ul>
                {curr.list.map((li, index) => {
                  return (
                    <motion.li
                      key={"id" + index}
                      variants={animationSkills}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                    >
                      {li}
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Resume = ({ setActiveNavbar }) => {
  const data1 = [
    {
      id:"adfaf",
      head: "Shubham Joshi",
      duration: "",
      location: "",
      description: [
        "I'm a passionate Full Stack Developer currently pursuing my BCA-hons. I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding and always. and i know about MERN stack, Sass, HTML, CSS, JS and Git and Github.",
      ],
      list: [
        "New Delhi, INDIA",
        "+91-7701990852",
        "shubhamjoshii676@gmail.com",
      ],
    },
  ];
  const data2 = [
    {
      id:"aadeew",
      head: " Bachelor of Computer Application (BCA)",
      duration: "2021 - 2024",
      location: "",
      description: [
        "Vivekananda Institute of Professional Studies - TC, New Delhi, India.",
        // "Relevant Courses: Aerodynamics, CAD/CAM, IoT Sensors, Data Science, Machine Learning.",
      ],
      list: [],
    },
  ];
  const data3 = [
    {
      id:"weqrw",
      head: "Front-end Web Development Intern, IBM SkillsBuild and CSRBOX Academic Internship",
      duration: "June 2023 - Aug 2023",
      location: "",
      description: [],
      list: [
        " Contributing to the development of a project, gaining hands-on experience in web development and collaborative teamwork.",
        "Led the design and development of a fully functional and aesthetically pleasing Website, ensuring a seamless user experience and responsive design.",
        " Conducted thorough testing to identify and resolve any bugs or issues, ensuring the website's optimal performance across various devices and browsers.",
      ],
    },
    {
      id:"gjdff",
      head: "Association for Computer Enthusiasts (ACE)",
      duration: "",
      location: "",
      description: ["Technical Society, VIPS - TC"],
      list: [],
    },
  ];
  return (
    <Element name="AboutME" id="Resume">
      {/* <section id="Resume" onMouseEnter={() => setActiveNavbar("AboutME")}> */}
      <SectionHeader heading={"Resume"} />
      <div id="ResumeContainer">
        <div>
          <Div MainHeading={"Summary"} data={data1} />
          <Div MainHeading={"Education"} data={data2} />
        </div>
        <Div MainHeading={"Professional Experience"} data={data3} />
      </div>
      {/* </section> */}
    </Element>
  );
};

export default Resume;

{
  /* <h2>About Me</h2>
  <p>I'm a passionate Full Stack Developer currently pursuing my BCA-hons. I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding and always." and i know about MERN stack, Sass, HTML, CSS, JS and Git and Github</p> */
}
