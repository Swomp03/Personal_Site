// import React from 'react'
import {motion} from "framer-motion";
import LinkedInIcon from "../images/LinkedInIcon.png"
import GithubIcon from "../images/GithubIcon.png"
import "./componentStyles/Footer.css"

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  const sm_container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.05
      }
    }
  };

  const sm_item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div id="footer-section">
      <motion.ul
        className="sm_container"
        variants={sm_container}
        initial="hidden"
        whileInView="visible"
      >
        <div id="footer">

          <motion.div
            className="sm_item"
            variants={sm_item}
          >
            <a href="https://github.com/Swomp03" target="_blank"><img src={GithubIcon} id="github-icon" alt="Github Icon" /></a>
          </motion.div>

          <motion.div
            className="sm_item"
            variants={sm_item}
          >
            <a href="https://www.linkedin.com/in/robert-liao-024444262/" target="_blank"><img src={LinkedInIcon} id="linkedin-icon" alt="LinkedIn Icon" /></a>
          </motion.div>

        </div>

        <motion.div
            className="sm_item"
            variants={sm_item}
        >
          <p id="name-site">@ Robert Liao | {currentYear}</p>
        </motion.div>
        
      </motion.ul>
    </div>
  )
}

export default Footer