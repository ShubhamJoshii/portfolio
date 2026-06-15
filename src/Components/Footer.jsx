import Instagram from "../Assets/Instagram (2).png";
import LeetCode from "../Assets/LeetCode (2).png";
import Github from "../Assets/Github2.png";
import Twitter from "../Assets/Twitter.png";
import Linkedin from "../Assets/LinkedIn (2).png";

import { Link } from "react-scroll";

const footerData = [
  { text: "Home", keyword: "FrontPage" },
  { text: "Skills", keyword: "Skills" },
  { text: "Projects", keyword: "Projects" },
  { text: "Cerificates", keyword: "Certificate" },
  { text: "Contact", keyword: "Contact" },
];

const Footer = ({ activeNavbar }) => {
  return (
    <section id="Footer">
      <div id="SocialMedia">
        <div id="SocialMedia1">
          <h1>Follow me</h1>
          <h2>...................................................</h2>
        </div>
        <div id="SocialLOGO">
          <div>
            <a
              href="https://leetcode.com/shubhamjoshii"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LeetCode} alt="Social Logo" />
            </a>
            <a
              href="https://github.com/ShubhamJoshii"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="Social Logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-joshi-86aaa6232"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="Social Logo" />
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/invites/contact/?i=1k3g7gxwflgz0&utm_content=2of27u2"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Instagram} alt="Social Logo" />
            </a>
            <a
              href="https://x.com/ShubhamJoshii03?t=TD1fIUJ3pUi-YhabSztJwA&s=09"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitter} alt="Social Logo" />
            </a>
          </div>
        </div>
      </div>
      <footer>
        <h2>SHUBHAM JOSHI</h2>
        <ul>
          {footerData.map((curr, id) => {
            return (
              <Link
                key={id}
                activeClass="active"
                to={curr.keyword}
                spy={true}
                smooth={true}
              >
                <li>{curr.text}</li>
              </Link>
            );
          })}
        </ul>
      </footer>
      <div id="rightsFooter">
        <p>@2023 Shubham Joshi</p>
        <p>All right reserved</p>
        <p>Privacy Policy</p>
      </div>
    </section>
  );
};

export default Footer;
