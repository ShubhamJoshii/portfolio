import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import HeaderImage1 from "../Assets/Certificate.png"
import HeaderImage2 from "../Assets/Contact.png"
import HeaderImage3 from "../Assets/Group of Projects (2).png"
// import HeaderImage4 from "../Assets/Home.png"
import HeaderImage4 from "../Assets/Home (2).png"
import HeaderImage5 from "../Assets/More Info.png"
import HeaderImage6 from "../Assets/Resume.png"
import ShubhamDP from "../Assets/ShubhamDP.png"
const Header = ({activeNavbar,setActiveNavbar}) => {
    const [displayMenu, setDisplayMenu] = useState(false);
    // setNavlinks(document.querySelectorAll("header ul li a"))
    const handleNavbar = () => {
        if (window.scrollY >= 100) {
            document.getElementById("OnscrollHeader").style.top = "0"
        } else {
            document.getElementById("OnscrollHeader").style.top = "-150px"
        }
    }

    window.addEventListener("scroll", handleNavbar)

    useEffect(() => {
        let a = document.getElementById("ResposiveHeader").style;
        let b = document.getElementById("HeaderMENU").style;
        displayMenu ? a.top = "52px" : a.top = "-150vh";
        if (displayMenu) {
            a.position = "fixed";
            b.position = "fixed";
        } else {
            b.position = "fixed";
        }
    }, [displayMenu])

    return (
        <header>
            <div id='HeaderMENU'>
                {
                    !displayMenu ?
                        <GiHamburgerMenu id="HamBurgerMenu" onClick={() => {
                            setDisplayMenu(!displayMenu);
                        }} /> :
                        <RxCross2 id="HamBurgerMenu" onClick={() => {
                            setDisplayMenu(!displayMenu);
                        }} />

                }
            </div>
            <div>
                <div id="ResposiveHeader">
                    <div id="headerMY_DP">
                        <img src={ShubhamDP} alt="DP" id="MY_DP" />
                        <h3>Mr. Shubham  Joshi</h3>
                    </div>
                    <ol>
                        <li className={activeNavbar === "Home" ? 'active' : ""} onClick={()=>setDisplayMenu(false)}><a href='#FrontPage' rel="noreferrer"><img src={HeaderImage4} alt='HeaderImage' /> Home</a></li>
                        {/* <li className={activeNavbar === "AboutME" ? 'active' : ""} onClick={()=>setDisplayMenu(false)}><a href='#AboutME' rel="noreferrer"><img src={HeaderImage5} alt='HeaderImage' /> About me</a></li> */}
                        <li className={activeNavbar === "Skills" ? 'active' : ""} onClick={()=>setDisplayMenu(false)}><a href='#Skills' rel="noreferrer"><img src={HeaderImage6} alt='HeaderImage' /> Skills</a></li>
                        <li className={activeNavbar === "Projects" ? 'active' : ""} onClick={()=>setDisplayMenu(false)}><a href='#Projects' rel="noreferrer"><img src={HeaderImage3} alt='HeaderImage' /> Projects</a></li>
                        <li  className={activeNavbar === "Certificate" ? 'active' : ""} onClick={()=>setDisplayMenu(false)}><a href='#Certificate' rel="noreferrer"><img src={HeaderImage1} alt='HeaderImage' /> Certificates</a></li>
                        <li className={activeNavbar === "ContactME" ? 'active' : ""} onClick={()=>setDisplayMenu(false)}><a href='#ContactME' rel="noreferrer"><img src={HeaderImage2} alt='HeaderImage' /> Contact</a></li>
                    </ol>
                    <button><a href='https://drive.google.com/file/d/170t40CWF0c0pLFkfXWJmqu7MMjPYWeO6/view?usp=sharing' target='_blank' rel="noreferrer">Download Resume</a></button>
                </div>
            </div>
            <ul>
                <li className={activeNavbar === "Home" ? 'active' : ""}><a href='#FrontPage' rel="noreferrer">HOME</a></li>
                <li className={activeNavbar === "Skills" ? 'active' : ""}><a href='#Skills' rel="noreferrer">SKILLS</a></li>
                <li className={activeNavbar === "Projects" ? 'active' : ""}><a href='#Projects' rel="noreferrer">PROJECT</a></li>
                <li className={activeNavbar === "ContactME" ? 'active' : ""}><a href='#ContactME' rel="noreferrer">CONTACT</a></li>
                <li><a href='https://drive.google.com/file/d/170t40CWF0c0pLFkfXWJmqu7MMjPYWeO6/view?usp=sharing' target='_blank' rel="noreferrer">RESUME</a></li>
            </ul>
            <div id="OnscrollHeader">
                <a href='#FrontPage'>
                    <svg width="254.8" height="32.720218579234974" viewBox="0 0 366 47" className="css-1j8o68f"><defs id="SvgjsDefs1558"></defs><g id="SvgjsG1559" featurekey="rootContainer" transform="matrix(1,0,0,1,0,0)" fill="#ffffff"><rect width="366" height="47" rx="5"></rect></g><g id="SvgjsG1560" featurekey="nameLeftFeature-0" transform="matrix(1.1079093165618366,0,0,1.1079093165618366,7.3323392764872946,-4.585848399187325)" fill="#122d42"><path d="M10.24 40.64 c-3.28 0 -8.28 -1.44 -7.8 -3.2 l0.4 -1.48 c1.12 -4.2 2.44 1.96 9.04 1.96 c3.36 0 5 -1.64 5 -3.96 c0 -1.88 -1.2 -2.68 -4.04 -4.44 l-3.88 -2.44 c-4.32 -2.72 -6.08 -4.4 -6.08 -7.4 c0 -4.92 4.8 -8.32 9.76 -8.32 c3.04 0 6.92 1.32 6.48 2.68 l-0.48 1.52 c-1.24 3.88 -2.24 -1.48 -7.72 -1.48 c-2.84 0 -4.32 1.44 -4.32 3.56 c0 1.8 1.08 2.8 3.76 4.44 l4.2 2.6 c4.24 2.64 5.96 4.44 5.96 7.32 c0 5 -4.92 8.64 -10.28 8.64 z M52.41 38.64 c0.32 0.04 0.08 1.36 -0.24 1.36 l-10.96 0 c-0.32 0 -0.56 -1.32 -0.24 -1.36 c2.04 -0.28 3.32 -1.08 3.32 -3.6 l0 -6.88 c-0.2 -0.68 -1.04 -0.68 -1.8 -0.68 l-10.24 0 c-0.76 0 -1.6 0 -1.8 0.68 l0 6.88 c0 2.8 1.6 3.36 3.32 3.6 c0.32 0.04 0.08 1.36 -0.24 1.36 l-10.96 0 c-0.32 0 -0.56 -1.32 -0.24 -1.36 c2.04 -0.28 3.32 -1.08 3.32 -3.6 l0 -18.08 c0 -2.52 -1.28 -3.32 -3.32 -3.6 c-0.32 -0.04 -0.08 -1.36 0.24 -1.36 l10.96 0 c0.32 0 0.56 1.32 0.24 1.36 c-1.72 0.24 -3.32 0.8 -3.32 3.6 l0 7.32 c0.2 0.68 1.04 0.68 1.8 0.68 l10.24 0 c0.76 0 1.6 0 1.8 -0.68 l0 -7.32 c0 -2.52 -1.28 -3.32 -3.32 -3.6 c-0.32 -0.04 -0.08 -1.36 0.24 -1.36 l10.96 0 c0.32 0 0.56 1.32 0.24 1.36 c-1.72 0.24 -3.32 0.8 -3.32 3.6 l0 18.08 c0 2.8 1.6 3.36 3.32 3.6 z M68.98 40.64 c-5.64 0 -11.96 -3 -11.96 -11.12 l0 -12.56 c0 -2.52 -1.28 -3.36 -3.24 -3.6 c-0.32 -0.04 -0.08 -1.36 0.24 -1.36 l10.92 0 c0.32 0 0.56 1.32 0.24 1.36 c-1.6 0.2 -3.2 0.8 -3.2 3.6 l0 12.76 c0 5.6 3.24 8.2 7.48 8.2 c4.36 0 7.84 -2.6 7.84 -8.2 l0 -12.76 c0 -2.6 -1.48 -3.32 -3.44 -3.6 c-0.28 -0.04 -0.08 -1.36 0.24 -1.36 l9 0 c0.28 0 0.52 1.32 0.2 1.36 c-1.6 0.2 -3.2 0.8 -3.2 3.6 l0 12.52 c0 7.36 -4.76 11.16 -11.12 11.16 z M101.59 24.759999999999998 c3.72 0 7.32 2.68 7.32 7.16 c0 4.96 -4.52 8.16 -11.2 8.16 c-1.92 0 -4.16 -0.24 -7.12 -0.24 c-2.52 0 -4.44 0.04 -6.28 0.24 c-0.36 0.04 -0.56 -1.36 -0.24 -1.44 c2.32 -0.6 4.12 -0.96 4.12 -3.92 l0 -17.76 c0 -2.56 -1.64 -3.24 -3.36 -3.68 c-0.32 -0.08 -0.12 -1.4 0.2 -1.36 c1.64 0.2 3.56 0.24 4.84 0.24 c3.2 0 5.56 -0.24 7.32 -0.24 c5.16 0 9.4 2.16 9.44 6.56 c0.04 3.24 -2.24 5.48 -5.04 6.04 l0 0.24 z M95.83 14 c-2.12 0 -2.84 0.72 -2.84 2.96 l0 7.12 l4.12 0 c2.88 0 4.56 -1.44 4.56 -4.52 c0 -3.8 -2.56 -5.56 -5.84 -5.56 z M97.59 38 c3.52 0 6.16 -1.04 6.16 -5.2 c0 -4.4 -2.92 -6.72 -6.64 -6.72 l-4.12 0 l0 8.64 c0 2.2 1.12 3.28 4.6 3.28 z M141 38.64 c0.32 0.04 0.08 1.36 -0.24 1.36 l-10.96 0 c-0.32 0 -0.56 -1.32 -0.24 -1.36 c2.04 -0.28 3.32 -1.08 3.32 -3.6 l0 -6.88 c-0.2 -0.68 -1.04 -0.68 -1.8 -0.68 l-10.24 0 c-0.76 0 -1.6 0 -1.8 0.68 l0 6.88 c0 2.8 1.6 3.36 3.32 3.6 c0.32 0.04 0.08 1.36 -0.24 1.36 l-10.96 0 c-0.32 0 -0.56 -1.32 -0.24 -1.36 c2.04 -0.28 3.32 -1.08 3.32 -3.6 l0 -18.08 c0 -2.52 -1.28 -3.32 -3.32 -3.6 c-0.32 -0.04 -0.08 -1.36 0.24 -1.36 l10.96 0 c0.32 0 0.56 1.32 0.24 1.36 c-1.72 0.24 -3.32 0.8 -3.32 3.6 l0 7.32 c0.2 0.68 1.04 0.68 1.8 0.68 l10.24 0 c0.76 0 1.6 0 1.8 -0.68 l0 -7.32 c0 -2.52 -1.28 -3.32 -3.32 -3.6 c-0.32 -0.04 -0.08 -1.36 0.24 -1.36 l10.96 0 c0.32 0 0.56 1.32 0.24 1.36 c-1.72 0.24 -3.32 0.8 -3.32 3.6 l0 18.08 c0 2.8 1.6 3.36 3.32 3.6 z"></path></g><g id="SvgjsG1561" featurekey="inlineSymbolFeature-0" transform="matrix(0.3806569477235673,0,0,0.3806569477235673,168.69547443728337,5.186945207146024)" fill="#122d42"><title xmlns="http://www.w3.org/2000/svg">NOUNS_Template</title><path xmlns="http://www.w3.org/2000/svg" d="M50,49,36.8,71.83H63.2Zm0,8.31,6,10.4H44Z"></path><path xmlns="http://www.w3.org/2000/svg" d="M50,7.39.8,92.61H99.2Zm0,8.31L92,88.45H8Z"></path><path xmlns="http://www.w3.org/2000/svg" d="M81.2,82.22H18.8l31.2-54ZM26,78.06H74L50,36.49Z"></path></g><g id="SvgjsG1562" featurekey="nameRightFeature-0" transform="matrix(1.1142011406534749,0,0,1.1142011406534749,209.20737100421522,-4.874476573341868)" fill="#122d42"><path d="M37.24 38.64 c0.32 0.04 0.08 1.36 -0.2 1.36 l-10.44 0 c-0.28 0 -0.48 -1.32 -0.24 -1.36 c1.68 -0.28 2.92 -1.08 2.8 -3.6 l-0.76 -13.44 l-6.48 13.2 c-0.84 1.72 -1.48 3.48 -1.6 4.12 c-0.08 0.48 -0.92 0.72 -1.56 0.72 c-0.6 0 -1 -0.24 -1.24 -0.72 l-9.24 -17.52 l-0.6 13.64 c-0.12 2.8 1.52 3.44 2.8 3.6 c0.32 0.04 0.08 1.36 -0.2 1.36 l-8.28 0 c-0.32 0 -0.56 -1.32 -0.24 -1.36 c1.72 -0.2 3.16 -0.8 3.32 -3.6 l1.28 -22.96 c0.04 -0.68 1.56 -0.72 1.96 0 l11.6 21.68 l10.76 -21.68 c0.36 -0.72 1.96 -0.68 2 0 l1.28 22.96 c0.16 2.8 1.6 3.4 3.28 3.6 z M42.29 40.4 c-0.88 0 -3.04 -1.88 -3.04 -3.04 s2.16 -3.04 3.04 -3.04 s3.04 1.88 3.04 3.04 s-2.16 3.04 -3.04 3.04 z M46.98 40.08 c-0.4 0.04 -0.56 -1.36 -0.24 -1.44 c2.32 -0.6 4.12 -0.96 4.12 -3.92 l0 -17.76 c0 -2.56 -1.64 -3.24 -3.36 -3.68 c-0.32 -0.08 -0.12 -1.4 0.2 -1.36 c1.64 0.2 3.32 0.24 5 0.24 c3.12 0 5.92 -0.24 7.96 -0.24 c9.68 0 14.92 5.76 14.92 13.48 c0 7.68 -5.24 14.68 -14.96 14.68 c-1.92 0 -4.4 -0.24 -7.36 -0.24 c-2.48 0 -4.44 0.04 -6.28 0.24 z M61.019999999999996 37.96 c6.52 0 9.76 -3.52 9.76 -10.28 c0 -7.64 -4.16 -13.64 -11.36 -13.64 c-2.84 0 -3.76 0.88 -3.76 2.92 l0 17.76 c0 2.16 1.48 3.24 5.36 3.24 z M77.03 40.08 c-0.4 0.04 -0.56 -1.36 -0.24 -1.44 c2.32 -0.6 4.12 -0.96 4.12 -3.92 l0 -17.76 c0 -2.56 -1.64 -3.24 -3.36 -3.68 c-0.32 -0.08 -0.12 -1.4 0.2 -1.36 c2.92 0.32 7.96 0.24 10.4 0.24 c3.64 0 6.28 -0.16 9.56 -0.24 c0.96 0 0.96 0.64 0.76 1.56 l-0.96 3.8 c-0.12 0.56 -1.12 0.56 -1.28 0 c-0.6 -1.96 -1.8 -3.08 -6.8 -3.08 c-2.8 0 -3.72 0.72 -3.72 2.8 l0 6.52 c0 1.04 0.52 1.24 1.32 1.24 l0.88 0 c3.24 0 6.04 -0.32 7.68 -1.8 c0.4 -0.36 1.28 -0.28 0.92 0.52 l-2.28 5.04 c-0.32 0.72 -0.92 0.64 -1.36 0.04 c-0.92 -1.28 -2.96 -1.8 -5.28 -1.8 l-0.56 0 c-0.8 0 -1.32 0.2 -1.32 1.24 l0 6.72 c0 2.28 0.96 3.12 4.28 3.12 c6.04 0 8.44 -2.76 9.4 -4.28 c0.28 -0.44 1.36 -0.24 1.36 0.44 c0 2.04 -1.72 6.08 -4.24 6.08 c-2.24 -0.12 -4.44 -0.24 -7.8 -0.24 c-3.68 0 -8.04 -0.12 -11.68 0.24 z M131.39999999999998 12 c0.44 0 0.6 1.28 0.08 1.36 c-1.6 0.24 -2.64 0.88 -4.08 4.24 l-6.76 15.72 c-1.4 3.24 -2.04 5.08 -2.04 6.68 c0 0.24 -2.76 0.88 -2.88 0.6 l-9.72 -22.96 c-1.44 -3.44 -2.52 -4.04 -4.08 -4.28 c-0.52 -0.08 -0.4 -1.36 0.12 -1.36 l10.52 0 c0.52 0 0.6 1.28 0.12 1.36 c-1.48 0.24 -2.96 0.88 -1.56 4.24 l6.76 16.24 l6.76 -16.24 c1.44 -3.44 -0.16 -3.96 -2 -4.24 c-0.52 -0.08 -0.4 -1.36 0.12 -1.36 l8.64 0 z"></path></g></svg>
                </a>
                <ul>
                    <li className={activeNavbar === "Home" ? 'active' : ""}><a href='#FrontPage' rel="noreferrer">HOME</a></li>
                    {/* <li className={activeNavbar === "Skills" ? 'active' : ""} onClick={()=>setDisplayMenu(false)}><a href='#Skills' rel="noreferrer"><img src={HeaderImage6} alt='HeaderImage' /> Skills</a></li> */}
                    <li className={activeNavbar === "Skills" ? 'active' : ""}><a href='#Skills' rel="noreferrer">SKILLS</a></li>
                    <li className={activeNavbar === "Projects" ? 'active' : ""}><a href='#Projects' rel="noreferrer">PROJECT</a></li>
                    <li className={activeNavbar === "ContactME" ? 'active' : ""}><a href='#ContactME' rel="noreferrer">CONTACT</a></li>
                    <li><a href='https://drive.google.com/file/d/170t40CWF0c0pLFkfXWJmqu7MMjPYWeO6/view?usp=sharing' target='_blank' rel="noreferrer">RESUME</a></li>
                </ul>
            </div>
        </header>

    )
}

export default Header