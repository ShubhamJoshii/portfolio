import React from "react";
import MicrosoftCertificate from "../Assets/MicrosoftStudentLeraning.png";
import MicrosoftCerfLogo from "../Assets/MicrosoftStudentProgramLogo.png";
import GoogleStudentCerti from "../Assets/GoogleDeveloper.png";
import GoogleCertiLogo from "../Assets/GoogleDeveloperLogo.png";
import NPTELLogo from "../Assets/NPTELLogo.png";
import ShowMoreCertificate from "./ShowMoreCertificate";
import NPTELJOC from "../Assets/NPTEL- Joy Of Computing.jpg";
import NPTELPDSA from "../Assets/NPTEL- PDSA Using Python.jpg";
import NPTELIOT from "../Assets/NPTEL- IOT.jpg";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Element } from "react-scroll";

const CertificateArr = [
  {
    Name: "Programming, Data Structures and Algorithms Using Python",
    Image: NPTELPDSA,
    Logo: NPTELLogo,
    Link: "https://nptel.ac.in/noc/E_Certificate/NPTEL22CS70S1324179809017022",
  },
  {
    Name: "Introduction to Internet of Things",
    Image: NPTELIOT,
    Logo: NPTELLogo,
    Link: "https://nptel.ac.in/noc/E_Certificate/NPTEL23CS83S73430821020378805",
  },
  {
    Name: "The Joy of Computing Using Python",
    Image: NPTELJOC,
    Logo: NPTELLogo,
    Link: "https://nptel.ac.in/noc/E_Certificate/NPTEL23CS108S53430411520378805",
  },
  {
    Name: "Google Developer Student Club",
    Image: GoogleStudentCerti,
    Logo: GoogleCertiLogo,
    Link: "#",
  },
  {
    Name: "Microsoft Student Ambassador Program",
    Image: MicrosoftCertificate,
    Logo: MicrosoftCerfLogo,
    Link: "#",
  },
];

const fadeInAnimationSkills = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (id) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6 * id,
    },
  }),
};

const Certificate = () => {
  const [isHovered, setIsHovered] = useState(0);
  return (
    <Element name="Certificate" id="Certificate">
      <SectionHeader heading="Certificates" />
      <div id="AllCertificates">
        {CertificateArr.map((curr, ids, arr) => {
          // console.log(ids)
          return (
            <motion.div
              id="certificates"
              key={ids}
              // style={ids < Math.floor(arr.length % 2) ? {scrollSnapAlign:"start"}:{scrollSnapAlign:"end"}}
              className={ids === isHovered ? "IsHovered" : ""}
              onMouseEnter={() => setIsHovered(ids)}
              variants={fadeInAnimationSkills}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={ids}
            >
              <img
                src={curr.Image}
                alt="Certificate"
                // onClick={() => window.open(curr.Link, "_blank")}
              />
            </motion.div>
          );
        })}
      </div>
    </Element>
  );
};

export default Certificate;
