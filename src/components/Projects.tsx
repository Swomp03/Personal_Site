import {motion} from "framer-motion";

import Header from './Header'
import Footer from './Footer'

import "./componentStyles/Projects.css"
import SingleProject from './SingleProject'

import HtmlCssJS from "../images/HTMLCSSJS.png"
import P5Mask from "../images/P5Mask.png"

import BootstrapIcon from "../images/BootstrapLogo.png"
import ReactIcon from "../images/reactimg.png"

import {useRef} from "react";

const Projects = () => {
  const personaList = ['HTML', 'CSS', 'JavaScript', 'Git', 'Bootstrap'];
  const personalSiteList = ['React', 'TypeScript', 'Bootstrap', 'Vite', 'HTML', 'CSS', 'Git']

  const mainProject_container = {
    hidden: { opacity: 1, scale: 1 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.05,
            staggerChildren: 0.05
          }
        }
  }

  const mainProject_item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const mainProject_scrollRef = useRef(null);

  return (
    <>
      <Header></Header>
      
      <motion.ul
        ref={mainProject_scrollRef}
        className="mainProject_container"
        variants={mainProject_container}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
      >
        <motion.div
          className="mainProject_item"
          variants={mainProject_item}
        >
          <h2 className='projects-h2'><b>Projects</b></h2>
        </motion.div>
        
        <motion.div
          className="mainProject_item"
          variants={mainProject_item}
        >
          <h3 className='projects-h3'>Web Development</h3>
        </motion.div>
      

        <div className='dev-body'>
          <motion.div
            className="mainProject_item"
            variants={mainProject_item}
          >
            <SingleProject
              title="Persona Social Link Guide"
              projectBackground="project-background-1"

              leftImg={HtmlCssJS}
              leftAlt="HtmlCssJS Logo"
              leftImgClass="htmlIcon"

              rightImg={P5Mask}
              rightAlt="Persona Mask"
              rightImgClass="personaIcon"

              explanation="A site that guides players through a mechanic in the video game series: Persona."
              skills={personaList}
              
              link="https://swomp03.github.io/Persona_Project/"
              webAlt="Persona Project Link"

              gitHubLink="https://github.com/Swomp03/Persona_Project"
              gitHubAlt="Persona Project GitHub Link"
            >
            </SingleProject>
          </motion.div>

          <motion.div
            className="mainProject_item"
            variants={mainProject_item}
          >
            <SingleProject
              title="Personal Site"
              projectBackground="project-background-2"

              leftImg={BootstrapIcon}
              leftAlt="Bootstrap Icon"
              leftImgClass="bootstrapIcon"

              rightImg={ReactIcon}
              rightAlt="React Icon"
              rightImgClass="reactIcon"

              explanation="Personal site for myself."
              skills={personalSiteList}

              link="/"
              webAlt="Personal Site Link"

              gitHubLink="https://github.com/Swomp03/Personal_Site"
              gitHubAlt="Personal Site GitHub Link"
            >
            </SingleProject>
          </motion.div>
        </div>
      </motion.ul>
      <Footer></Footer>
    </>
  )
}

export default Projects