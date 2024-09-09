import { useState } from "react";
import { Suspense ,lazy} from "react";
const Resume = lazy(()=> import("./Components/Resume"));
const Certificate = lazy(()=> import("./Components/Certificate"));
const ContactMe = lazy(()=> import("./Components/ContactMe"));
const Footer = lazy(()=> import("./Components/Footer"));
const FrontPage = lazy(()=> import("./Components/FrontPage"));
const Projects = lazy(()=> import("./Components/Projects"));
const Skills = lazy(()=> import("./Components/Skills"));
const Loading = lazy(()=> import("./Components/Loading"));

import "./Styles/main.scss";
function App() {
  const [activeNavbar, setActiveNavbar] = useState('Home');
  const fadeInAnimationSection = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition:{
        delay:0.5
      }
    },
  };
  return (
    <>
      {/* <Loading /> */}
      <Suspense fallback={<Loading />}>
        <FrontPage activeNavbar={activeNavbar} setActiveNavbar={setActiveNavbar} />
        <Skills setActiveNavbar={setActiveNavbar} fadeInAnimationSection={fadeInAnimationSection}/>
        <Resume setActiveNavbar={setActiveNavbar} />
        <Projects setActiveNavbar={setActiveNavbar} />
        <Certificate setActiveNavbar={setActiveNavbar} />
        <ContactMe setActiveNavbar={setActiveNavbar} fadeInAnimationSection={fadeInAnimationSection}/>
        <Footer setActiveNavbar={setActiveNavbar} activeNavbar={activeNavbar} />
      </Suspense>
    </>
  );
}

export default App;