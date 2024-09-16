// import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {motion} from "framer-motion"

import "./componentStyles/Home.css"

import rocketImage from '../images/rocket.png'
import typescriptLogo from '../images/TypescriptLogo.png'
import vsCodeLogo from '../images/VisualStudioCode.png'

const Home = () => {

  const linkAnimation = (dampingAmount: Number, stiffnessAmount: Number, yVal = 50)=>({
    hidden:{
      opacity: 0,
      y: yVal
    },

    visible:{
      opacity: 1,
      y: 0,
      transition:{
        duration: 0.1, type:"spring", damping: dampingAmount, stiffness: stiffnessAmount
      }
    }
  })

  return (
    <>
      <Header></Header>
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={linkAnimation(25, 500)}

          viewport={{
            once: true
          }}
        >
          <h2 className='home-h2'>Hi! I'm <b>Robert</b>.</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={linkAnimation(33, 480)}

          viewport={{
            once: true
          }}
        >
          <div id="home-image">
            <img src={rocketImage} alt="rocket" />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={linkAnimation(41, 460)}

          viewport={{
            once: true
          }}
        >
          <h2 className="home-subtitle-h2">A <b><i>Software Developer</i></b>.</h2>
        </motion.div>
      </div>

      <div id='project-intro'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={linkAnimation(48, 440)}

          id='project-items'
          viewport={{
            once: true
          }}
        >
          <img id='VSCodeLogo' src={vsCodeLogo} alt="VSCode Logo" />
          <img id='TypeScriptLogo' src={typescriptLogo} alt="TypeScript Logo" />
          <a href="/projects"><h2 id='projects-title'><b>Projects</b></h2></a>
        </motion.div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default Home