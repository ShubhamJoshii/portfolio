import React, { useState } from 'react'
import HtmlLogo from "../Assets/Html.png"
import CssLogo from "../Assets/CSS3.png"
import JavascriptLogo from "../Assets/JavaScript.png"
import ReactLogo from "../Assets/React.png"
import NodeLogo from "../Assets/Node Js.png"
import MongoLogo from "../Assets/Mongo.png"
import FirebaseLogo from "../Assets/Firebase.png"
import PythonLogo from "../Assets/Python.png"
import FigmaLogo from "../Assets/Figma.png"
import SassLogo from "../Assets/Sass.png"
import GitLogo from "../Assets/Git.png"
import GithubLogo from "../Assets/GithubSkilsLogo.png"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"

const SkillsData = [
  {
    Text: "HTML",
    Image: HtmlLogo,
    Color: "A13333",
    knowledgePercent: "90%"
  },
  {
    Text: "CSS",
    Image: CssLogo,
    Color: "064663",
    knowledgePercent: "80%"
  },
  {
    Text: "JAVASCRIPT",
    Image: JavascriptLogo,
    Color: "461111",
    knowledgePercent: "80%"
  },
  {
    Text: "REACT JS",
    Image: ReactLogo,
    Color: "041C32",
    knowledgePercent: "85%"
  },
  {
    Text: "PYTHON",
    Image: PythonLogo,
    Color: "461111",
    knowledgePercent: "65%"
  },
  {
    Text: "NODE JS",
    Image: NodeLogo,
    Color: "ECB365",
    knowledgePercent: "70%"
  },
  {
    Text: "EXPRESS JS",
    Image: JavascriptLogo,
    Color: "A13333",
    knowledgePercent: "70%"
  },
  {
    Text: "MONGO DB",
    Image: MongoLogo,
    Color: "064663",
    knowledgePercent: "80%"
  },
  {
    Text: "SASS",
    Image: SassLogo,
    Color: "bf4080",
    knowledgePercent: "65%"
  },
  {
    Text: "FIREBASE",
    Image: FirebaseLogo,
    Color: "04293A",
    knowledgePercent: "65%"
  },
  {
    Text: "FIGMA",
    Image: FigmaLogo,
    Color: "04293A",
    knowledgePercent: "65%"
  },
  {
    Text: "GITHUB",
    Image: GithubLogo,
    Color: "04293A",
    knowledgePercent: "70%"
  },
  {
    Text: "GIT",
    Image: GitLogo,
    Color: "04293A",
    knowledgePercent: "70%"
  }
]


const Skills = ({ setActiveNavbar }) => {
  const [viewMore, setViewMore] = useState(true);
  return (
    <section id="Skills" onMouseEnter={() => setActiveNavbar("Skills")}>
      <h2>Skills</h2>
      <div id='cardsCollection'>
        {
          SkillsData.map((curr, ids) => {
            return (
              <div style={{ backgroundColor: `#${curr.Color}` }} id='cards' key={ids}>
                <h3>{curr.Text}</h3>
                <img src={curr.Image} alt="Language Logo" />
                <div id='skillsKnow' style={{ backgroundColor: `#${curr.Color}` }} >
                  <img src={curr.Image} alt="Language Logo" />
                  <div>
                    <p>{curr.knowledgePercent}</p>
                  </div>
                </div>

              </div>

            )
          })
        }
      </div>
      {
        viewMore ?
          <div style={{ backgroundColor: `#5F0303` }} id='cardsShowMore' onClick={() => {
            document.getElementById("cardsCollection").style.height = "100%";
            setViewMore(!viewMore);
          }}>
            <h3>VIEW MORE</h3>
            <IoMdArrowDropdown id="dropDown" />
            {/* <img src={curr.Image} alt="Language Logo" /> */}
          </div>
          :
          <div style={{ backgroundColor: `#5F0303` }} id='cardsShowMore' onClick={() => {
            document.getElementById("cardsCollection").style.height = "100px";
            setViewMore(!viewMore);
          }}>
            <h3>VIEW LESS</h3>
            <IoMdArrowDropup id="dropDown" />
            {/* <img src={curr.Image} alt="Language Logo" /> */}
          </div>

      }
    </section>
  )
}

export default Skills;