import {motion} from "framer-motion";

import Header from './Header'
import Footer from './Footer'

import "./componentStyles/Projects.css"
import SingleProject from './SingleProject'

import HtmlCssJS from "../images/HTMLCSSJS.png"
import P5Mask from "../images/P5Mask.png"

import BootstrapIcon from "../images/BootstrapLogo.png"
import ReactIcon from "../images/reactimg.png"

import AngularIcon from "../images/AngularLogo.png"
import TailwindIcon from "../images/TailwindLogo.svg.png"

import WordpressIcon from "../images/WordpressLogo.png"
import ElementorIcon from "../images/ElementorLogo.png"

import NodeJsIcon from "../images/nodejsicon.png";

import {useRef} from "react";

const Projects = () => {
  const personaList = ['HTML', 'CSS', 'JavaScript', 'Git', 'Bootstrap'];
  const personalSiteList = ['React', 'TypeScript', 'Bootstrap', 'Vite', 'HTML', 'CSS', 'Git']
  const cryptoSiteList = ['Angular 19+', 'TypeScript', 'Tailwind', 'RXJS', 'HTML', 'CSS']
  const wordpressSiteList = ['WordPress', 'Elementor', 'Astra', 'HTML', 'CSS', 'JavaScript']
  const coinflipList = ['React', 'TypeScript', 'Node JS API', 'PostgreSQL', 'HTML', 'CSS']

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

          <motion.div
            className="mainProject_item"
            variants={mainProject_item}
          >
            <SingleProject
              title="Crypto Tracker"
              projectBackground="project-background-3"

              leftImg={AngularIcon}
              leftAlt="Angular Icon"
              leftImgClass="angularIcon"

              rightImg={TailwindIcon}
              rightAlt="Tailwind Icon"
              rightImgClass="tailwindIcon"

              explanation="Crypto currency application tracking the prices of different coins."
              skills={cryptoSiteList}

              link="https://swomp03.github.io/Crypto_Project/"
              webAlt="Crypto Site Link"

              gitHubLink="https://github.com/Swomp03/Crypto_Project"
              gitHubAlt="Crypto Site GitHub Link"
            >
            </SingleProject>
          </motion.div>

          <motion.div
            className="mainProject_item"
            variants={mainProject_item}
          >
            <SingleProject
              title="WordPress Design Site"
              projectBackground="project-background-4"

              leftImg={WordpressIcon}
              leftAlt="WordPress Icon"
              leftImgClass="wordpressIcon"

              rightImg={ElementorIcon}
              rightAlt="Elementor Icon"
              rightImgClass="elementorIcon"

              explanation="Design website detailing personal information using Wordpress."
              skills={wordpressSiteList}

              link="https://design-robertliao.com/"
              webAlt="Wordpress Site Link"

              gitHubLink="https://github.com/Swomp03/Crypto_Project"
              gitHubAlt="Crypto Site GitHub Link"
              gitHubExists="False"
            >
            </SingleProject>
          </motion.div>

          <motion.div
            className="mainProject_item"
            variants={mainProject_item}
          >
            <SingleProject
              title="Coin Flip Pro"
              projectBackground="project-background-5"

              leftImg={ReactIcon}
              leftAlt="React Icon"
              leftImgClass="reactIconCoinFlip"

              rightImg={NodeJsIcon}
              rightAlt="NodeJS Icon"
              rightImgClass="nodeJSIcon"

              explanation="A web application that tracks user coin flip results and statistics."
              skills={coinflipList}

              link="https://swomp03.github.io/Coinflip-Project/"
              webAlt="Coin Flip Site Link"

              gitHubLink="https://github.com/Swomp03/Coinflip-Project">

            </SingleProject>
          </motion.div>
        </div>
      </motion.ul>
      <Footer></Footer>
    </>
  )
}

export default Projects