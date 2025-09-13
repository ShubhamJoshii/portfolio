import React from "react";

import { RiExternalLinkFill } from "react-icons/ri";
import FrontShubhamDP from "../Assets/FrontDPImg.png";

import Github from "../Assets/Github.png";
import Instagram from "../Assets/Instagram.png";
import Linkedin from "../Assets/LinkedIn.png";
import Header from "./Header";
import DownArrow from "../Assets/Arrowdown.gif";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import ShootingStar from "./ShootingStar";

const imageAnimation = {
  initial: {
    opacity: 0,
    y: 20,
    transform: {
      scale: 0,
    },
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transform: {
      scale: 1,
    },
    transition: {
      delay: 0.2,
    },
  }),
};
const textVariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: (num = 1) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2 * num,
      staggerChildren: 0.1,
    },
  }),
};

const FrontPage = () => {
  return (
    <Element name="FrontPage" id="FrontPage">
      <Header />
      <ShootingStar />
      <div id="FrontPageContainer" className="Pages">
        <Link to="Skills" spy={true} smooth={true}>
          <img
            src={DownArrow}
            alt="ScrollDown"
            rel="noreferrer"
            id="arrowDown"
          />
        </Link>
        <div id="firstHalf">
          <motion.h2
            variants={textVariants}
            initial="initial"
            animate="animate"
            custom={0}
          >
            Hi there! I'm
          </motion.h2>
          <motion.h3
            variants={textVariants}
            initial="initial"
            animate="animate"
            custom={1}
          >
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 200,
                strings: ["Shubham Joshi", "Web Developer"],
              }}
            />
          </motion.h3>
          <motion.p
            variants={textVariants}
            initial="initial"
            animate="animate"
            custom={2}
          >
            A Full-Stack Web Developer passionate about creating <br />
            interactive application and experiences on the web
          </motion.p>
          <div id="btns">
            <motion.a
              href="https://github.com/ShubhamJoshii"
              target="_blank"
              rel="noreferrer"
              variants={textVariants}
              initial="initial"
              animate="animate"
              custom={3}
            >
              GITHUB
              <RiExternalLinkFill />
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/170t40CWF0c0pLFkfXWJmqu7MMjPYWeO6/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
              variants={textVariants}
              initial="initial"
              animate="animate"
              custom={4}
            >
              DOWNLOAD RESUME
            </motion.a>
          </div>
          <div id="checkMeOut">
            <motion.p
              variants={textVariants}
              initial="initial"
              animate="animate"
              custom={1}
            >
              Check me out
            </motion.p>
            <div>
              <motion.a
                href="https://github.com/ShubhamJoshii"
                target="_blank"
                rel="noreferrer"
                variants={textVariants}
                initial="initial"
                animate="animate"
                custom={2}
              >
                <img src={Github} alt="socialMedias" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/invites/contact/?i=1k3g7gxwflgz0&utm_content=2of27u2"
                target="_blank"
                rel="noreferrer"
                variants={textVariants}
                initial="initial"
                animate="animate"
                custom={3}
              >
                <img src={Instagram} alt="socialMedias" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shubham-joshi-86aaa6232"
                target="_blank"
                rel="noreferrer"
                variants={textVariants}
                initial="initial"
                animate="animate"
                custom={4}
              >
                <img src={Linkedin} alt="socialMedias" />
              </motion.a>
            </div>
          </div>
        </div>
        <motion.img
          src={FrontShubhamDP}
          alt="MYDP"
          id="secondHalf"
          variants={imageAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        />
      </div>
      <p id="sideMail">shubhamjoshii676@gmail.com</p>
    </Element>
  );
};

export default FrontPage;
