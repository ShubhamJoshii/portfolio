import React, { useEffect, useRef, useState } from "react";
import Project1 from "../Assets/Projects (1).png";
import Project2 from "../Assets/Projects (2).png";
import Project3 from "../Assets/Projects (3).png";
import Project4 from "../Assets/Projects (4).png";
import Project5 from "../Assets/Projects (5).png";
import Project6 from "../Assets/Projects (6).png";
import {
  FaCaretSquareLeft,
  FaCaretSquareRight,
  FaGithub,
  FaLink,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { motion, useScroll, useTransform } from "framer-motion";
const fadeInAnimationSkills = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
};
const ProjectsData = [
  {
    Image: Project6,
    Topic: "Perky-Beans",
    GithubLink: "https://github.com/ShubhamJoshii/perky-beans",
    HostLink: "https://perky-beans.vercel.app/",
    Language_Used: [
      { Text: "MERN", Color: "b08039" },
      { Text: "ReactJS", Color: "5CCFEE" },
      { Text: "Mongodb", Color: "3E9837" },
      { Text: "ExpressJS", Color: "FFE600" },
      { Text: "NodeJS", Color: "3E9837" },
      { Text: "Firebase", Color: "FEA714" },
      { Text: "Sass", Color: "bf4080" },
      { Text: "Full-Stack", Color: "fff" },
    ],
  },
  {
    Image: Project3,
    Topic: "Talkie-Chat App",
    GithubLink: "https://github.com/ShubhamJoshii/TalkieChat",
    HostLink: "https://talkie-chat.vercel.app/",
    Language_Used: [
      { Text: "MERN", Color: "b08039" },
      { Text: "ReactJS", Color: "5CCFEE" },
      { Text: "Mongodb", Color: "3E9837" },
      { Text: "ExpressJS", Color: "FFE600" },
      { Text: "NodeJS", Color: "3E9837" },
      { Text: "Firebase", Color: "FEA714" },
      { Text: "CSS", Color: "2760E5" },
      { Text: "Full-Stack", Color: "fff" },
    ],
  },
  {
    Image: Project2,
    Topic: "Login-Register Form",
    GithubLink: "https://github.com/ShubhamJoshii/LoginRegisterMERN",
    HostLink: "http://mern-project-ten.vercel.app/",
    Language_Used: [
      { Text: "ReactJS", Color: "5CCFEE" },
      { Text: "Mongodb", Color: "3E9837" },
      { Text: "ExpressJS", Color: "FFE600" },
      { Text: "NodeJS", Color: "3E9837" },
      { Text: "CSS", Color: "2760E5" },
      { Text: "Full-Stack", Color: "fff" },
    ],
  },
  {
    Image: Project5,
    Topic: "Amazon Clone",
    GithubLink: "https://github.com/ShubhamJoshii/AmazonClone",
    HostLink: "https://amazon-clone-shubhamjoshii.vercel.app/",
    Language_Used: [
      { Text: "ReactJS", Color: "5CCFEE" },
      { Text: "Mongodb", Color: "3E9837" },
      { Text: "ExpressJS", Color: "FFE600" },
      { Text: "CSS", Color: "2760E5" },
      { Text: "Full-Stack", Color: "fff" },
    ],
  },
  {
    Image: Project1,
    Topic: "Hotstar Clone",
    GithubLink: "https://github.com/ShubhamJoshii/Hotstar-Clone",
    HostLink: "https://shubhamjoshii.github.io/Hotstar-Clone/",
    Language_Used: [
      { Text: "ReactJS", Color: "5CCFEE" },
      { Text: "CSS", Color: "2760E5" },
      { Text: "Front-End", Color: "fff" },
    ],
  },
  {
    Image: Project4,
    Topic: "Admin Dashboard",
    GithubLink: "https://github.com/ShubhamJoshii/AdminDashboard",
    HostLink: "https://shubhamjoshii.github.io/AdminDashboard/",
    Language_Used: [
      { Text: "ReactJS", Color: "5CCFEE" },
      { Text: "CSS", Color: "2760E5" },
      { Text: "Front-End", Color: "fff" },
    ],
  },
];

const Projects = ({ setActiveNavbar }) => {

  const [centerImageIndex, setCenterImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll(".imageItem");
      const centerScreen = window.innerWidth / 2;

      images.forEach((image, index) => {
        const rect = image.getBoundingClientRect();
        const imageCenter = rect.left + rect.width / 2;
        if (Math.abs(imageCenter - centerScreen) < 100) {
          setCenterImageIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-80%"]);

  return (
    <>
      <section id="Projects" ref={targetRef}  onMouseEnter={() => setActiveNavbar("Projects")}>
        <div className="contentContainer">
          <div id="headerCarousel">
            <SectionHeader
              heading={"My Projects"}
              description={
                "Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to GITHUB repositories and live demos of it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."
              }
            />
          </div>
          <motion.div className="images" style={{ x }}>
            {ProjectsData.map((curr, id) => {
              // console.log(curr);
              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="imageItem"
                  style={{
                    // borderColor: id === centerImageIndex ? "red" : "",
                    transition: "scale 0.5s ease",
                  }}
                >
                  <div className="image-container">
                    <img className="image" src={curr.Image} alt="" />
                    <div id="details">
                      <div id="Topic-Links">
                        <h3 className="topic">{curr.Topic}</h3>
                        <div >
                          <a
                            href={curr.GithubLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaGithub />
                          </a>
                          <a
                            href={curr.HostLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaLink />
                          </a>
                        </div>
                      </div>
                      <div id="languagesUsed">
                        {curr.Language_Used.map((curr2, ids2) => {
                          return (
                            <span
                              style={{ color: `#${curr2.Color}` }}
                              key={ids2}
                            >
                              #{curr2.Text}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
