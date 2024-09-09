import React from 'react'
import Instagram from "../Assets/Instagram (2).png"
import Facebook from "../Assets/Facebook.png"
import Github from "../Assets/Github2.png"
import Twitter from "../Assets/Twitter.png"
import Linkedin from "../Assets/LinkedIn (2).png"

import HomeLogo from "../Assets/Home.png"
import AboutME from "../Assets/Male User.png"
import MedalLogo from "../Assets/Medal.png"
import ProjectLogo from "../Assets/Group of Projects.png"
import Graduation from "../Assets/Graduation Cap.png"
import ContactLogo from "../Assets/Call.png";

const Footer = ({activeNavbar,setActiveNavbar}) => {
  return (
    <section id="Footer">
      <div id='SocialMedia'>
        <div id='SocialMedia1'>
          <h1>Follow me</h1>
          <h2>...................................................</h2>
        </div>
        <div id='SocialLOGO'>
          <div>
            <a href='https://www.instagram.com/invites/contact/?i=1k3g7gxwflgz0&utm_content=2of27u2' rel="noreferrer"  target='_blank' >
              <img src={Instagram} alt="Social Logo" />
            </a>
            <a href='https://www.facebook.com/shubham.joshi.733076' target='_blank' rel="noreferrer" >
              <img src={Facebook} alt="Social Logo" />
            </a>
            <a href='https://github.com/ShubhamJoshii' target='_blank' rel="noreferrer" >
              <img src={Github} alt="Social Logo" />
            </a>
          </div>
          <div>
            <a href='https://x.com/ShubhamJoshii03?t=TD1fIUJ3pUi-YhabSztJwA&s=09' target='_blank' rel="noreferrer">
              <img src={Twitter} alt="Social Logo" />
            </a>
            <a href='https://www.linkedin.com/in/shubham-joshi-86aaa6232' target='_blank' rel="noreferrer" >
              <img src={Linkedin} alt="Social Logo" />
            </a>
          </div>
        </div>

      </div>
      <footer>
        <h2>SHUBHAM JOSHI</h2>
        <ul>
          <li className={activeNavbar === "Home" ? 'active' : ""} onClick={()=>setDisplayMenu(false)}><a href='#FrontPage'>Home</a></li>
          <li className={activeNavbar === "AboutME" ? 'active' : ""} onClick={()=>setDisplayMenu(false)}><a href='#AboutME'>About me</a></li>
          <li className={activeNavbar === "Skills" ? 'active' : ""} onClick={()=>setDisplayMenu(false)}><a href='#Skills'>Skills</a></li>
          <li className={activeNavbar === "Projects" ? 'active' : ""} onClick={()=>setDisplayMenu(false)}><a href='#Projects'>Projects</a></li>
          <li className={activeNavbar === "Certificate" ? 'active' : ""} onClick={()=>setDisplayMenu(false)}><a href='#Certificate'>Certificates</a></li>
          <li className={activeNavbar === "ContactME" ? 'active' : ""} onClick={()=>setDisplayMenu(false)}><a href='#ContactME'>Contact us</a></li>
        </ul>
      </footer>
          <div id='sideFooterBTN' >
          </div>
          <div id='sideFooterBTN2' >
            <a href='#FrontPage'><img src={HomeLogo} alt='navbarIcon' /></a>
            <a href='#AboutME'><img src={AboutME} alt='navbarIcon' /></a>
            <a href='#Skills'><img src={Graduation} alt='navbarIcon' /></a>
            <a href='#Projects'><img src={ProjectLogo} alt='navbarIcon' /></a>
            <a href='#Certificate'><img src={MedalLogo} alt='navbarIcon' /></a>
            <a href='#ContactME'><img src={ContactLogo} alt='navbarIcon' /></a>
          </div>
      <div id='rightsFooter'>
        <p>@2023 Shubham Joshi</p>
        <p>All right reserved</p>
        <p>Privacy Policy</p>
      </div>
    </section>
  )
}

export default Footer