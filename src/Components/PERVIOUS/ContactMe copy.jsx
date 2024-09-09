import React, { useState } from 'react'
import GmailLogo from "../Assets/Gmail.png";
import PhoneLogo from "../Assets/Phone.png"
import FacebookLogo from "../Assets/Facebook.png"
import Instagram from "../Assets/Instagram (2).png"
import Github from "../Assets/Github2.png"
import Twitter from "../Assets/Twitter.png"
import Linkedin from "../Assets/LinkedIn (2).png"

import { db } from "../../firebase";
import { ref, set } from "firebase/database";
const ContactMe = ({ setActiveNavbar }) => {
  const [ContactForm, setContactForm] = useState({
    User_Name: "",
    User_Email: "",
    User_Message: "",
  });
  const handleInput = (e) => {
    const Name = e.target.name;
    const Value = e.target.value;
    setContactForm({ ...ContactForm, [Name]: Value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ContactForm.User_Email && ContactForm.User_Name && ContactForm.User_Message) {
      set(ref(db, `${ContactForm.User_Name}_${Math.floor(Math.random() * 1000)}`),
        {
          User_Name: ContactForm.User_Name,
          User_Email: ContactForm.User_Email,
          User_Message: ContactForm.User_Message,
        }
      ).then(() => {
        alert("We Will Contact you in few Hours");
        setContactForm({
          User_Name: "",
          User_Email: "",
          User_Message: "",
        })
      })
    } else {
      alert("Fill Form Properly")
    }

  }
  return (
    <section id="ContactME" onMouseEnter={() => setActiveNavbar("ContactME")}>
      <div id="ContactMEinner">
        <div id='ContactMeDetails'>
          <h1>Contact Me</h1>
          <div>
            <img src={GmailLogo} alt='Logo' />
            <p>shubhamjoshii676@gmail.com</p>
          </div>
          <div>
            <img src={PhoneLogo} alt='Logo' />
            <p>+91-7701990852</p>
          </div>
          <div id='SocialMedias'>
            <a href='https://www.instagram.com/invites/contact/?i=1k3g7gxwflgz0&utm_content=2of27u2' target='_blank' rel="noreferrer">
              <img src={Instagram} alt="Social Logo" />
            </a>
            <a href='https://www.facebook.com/shubham.joshi.733076' target='_blank' rel="noreferrer">
              <img src={FacebookLogo} alt="Social Logo" />
            </a>
            <a href='https://github.com/ShubhamJoshii' target='_blank' rel="noreferrer">
              <img src={Github} alt="Social Logo" />
            </a>
            <a href='https://x.com/ShubhamJoshii03?t=TD1fIUJ3pUi-YhabSztJwA&s=09' target='_blank' rel="noreferrer">
              <img src={Twitter} alt="Social Logo" />
            </a>
            <a href='https://www.linkedin.com/in/shubham-joshi-86aaa6232' target='_blank' rel="noreferrer">
              <img src={Linkedin} alt="Social Logo" />
            </a>
          </div>
          <a href="https://drive.google.com/uc?export=view&id=170t40CWF0c0pLFkfXWJmqu7MMjPYWeO6" target='_blank' rel="noreferrer">
            <button>Download CV</button>
          </a>
        </div>
        <form id='ContactMEForm' method='POST'>
          <input type='text' placeholder='Your Name' name='User_Name' onChange={handleInput} value={ContactForm.User_Name} />
          <input type='email' placeholder='Your Email' name='User_Email' onChange={handleInput} value={ContactForm.User_Email} />
          <textarea placeholder='Your Message' name='User_Message' onChange={handleInput} value={ContactForm.User_Message}></textarea>
          <input type='submit' value="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </section>
  )
}

export default ContactMe