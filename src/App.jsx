import { useEffect, useState } from "react";
import { Suspense, lazy } from "react";

const Resume = lazy(() => import("./Components/Resume"));
const Certificate = lazy(() => import("./Components/Certificate"));
const Contact = lazy(() => import("./Components/Contact"));
const Footer = lazy(() => import("./Components/Footer"));
const FrontPage = lazy(() => import("./Components/FrontPage"));
const Projects = lazy(() => import("./Components/Projects"));
const Skills = lazy(() => import("./Components/Skills"));
const Loading = lazy(() => import("./Components/Loading"));
const GithubContributions = lazy(() => import("./Components/GithubContributions"));

import { Events, scrollSpy, animateScroll as scroll } from "react-scroll";
import { IoArrowUpOutline } from "react-icons/io5";
import "./Styles/main.scss";
import { useScroll, motion } from "framer-motion";

const fadeInAnimationSection = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
};

function App() {
  const [activeNavbar, setActiveNavbar] = useState("FrontPage");
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    Events.scrollEvent.register("begin");

    Events.scrollEvent.register("end");

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        {isVisible && (
          <div id="ScrollToTop" onClick={() => scroll.scrollToTop()}>
            <IoArrowUpOutline />
          </div>
        )}
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <FrontPage
          activeNavbar={activeNavbar}
          setActiveNavbar={setActiveNavbar}
        />
        <Skills
          setActiveNavbar={setActiveNavbar}
          fadeInAnimationSection={fadeInAnimationSection}
        />
        <Resume setActiveNavbar={setActiveNavbar} />
        <Projects setActiveNavbar={setActiveNavbar} />
        <GithubContributions />
        <Certificate setActiveNavbar={setActiveNavbar} />
        <Contact
          setActiveNavbar={setActiveNavbar}
          fadeInAnimationSection={fadeInAnimationSection}
        />
        <Footer setActiveNavbar={setActiveNavbar} activeNavbar={activeNavbar} />
      </Suspense>
    </>
  );
}

export default App;
