import React, { useState } from "react";
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

const Projects = ({ setActiveNavbar }) => {
  // const [count, setCount] = useState(0);
  const [Projects, setProjects] = useState([
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
  ]);
  return (
    <section id="Projects" onMouseEnter={() => setActiveNavbar("Projects")}>
      <div id="ProjectsInner">
        <h1>My Projects</h1>
        <p>
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to GITHUB repositories and live demos of it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
        <div id="ProjectCollections">
          <div id="Icons">
            <FaCaretSquareLeft
              id="leftIcon"
              onClick={() => {
                setProjects([
                  Projects.pop(),
                  ...Projects.splice(0, Projects.length),
                ]);
              }}
            />
            <FaCaretSquareRight
              id="RightIcon"
              onClick={() => {
                setProjects([
                  ...Projects.splice(1, Projects.length),
                  Projects.shift(),
                ]);
              }}
            />
          </div>
          {Projects.slice(0, 3).map((curr, ids) => {
            let classUsed = "ProjectCardCenter";
            if (ids < 1) {
              classUsed = "ProjectCardLeft";
            }
            if (ids > 1) {
              classUsed = "ProjectCardRight";
            }
            const handleClick = () => {
              if (ids < 1) {
                setProjects([
                  Projects.pop(),
                  ...Projects.splice(0, Projects.length),
                ]);
              }

              if (ids > 1) {
                setProjects([
                  ...Projects.splice(1, Projects.length),
                  Projects.shift(),
                ]);
              }
            };

            return (
              <div
                id="ProjectCard"
                className={classUsed}
                onClick={handleClick}
                key={ids}
              >
                <div id="ProjectImage">
                  <img src={curr.Image} alt="Projects" />
                  <div>
                    <a href={curr.GithubLink} target="_blank" rel="noreferrer">
                      <FaGithub />
                    </a>
                    <a href={curr.HostLink} target="_blank" rel="noreferrer">
                      <FaLink />
                    </a>
                  </div>
                </div>
                <h2>{curr.Topic}</h2>
                <div id="languagesUsed">
                  {curr.Language_Used.map((curr2, ids2) => {
                    // console.log(curr2);
                    return (
                      <span style={{ color: `#${curr2.Color}` }} key={ids2}>
                        #{curr2.Text}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
