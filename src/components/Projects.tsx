// import React from 'react'
import Header from './Header'
import Footer from './Footer'

import "./componentStyles/Projects.css"
import SingleProject from './SingleProject'

import HtmlCssJS from "../images/HTMLCSSJS.png"
import P5Mask from "../images/P5Mask.png"

import BootstrapIcon from "../images/BootstrapLogo.png"
import ReactIcon from "../images/reactimg.png"


const Projects = () => {
  const personaList = ['HTML', 'CSS', 'JavaScript', 'Git', 'Bootstrap'];
  const personalSiteList = ['React', 'TypeScript', 'Bootstrap', 'Vite', 'HTML', 'CSS', 'Git']

  return (
    <>
      <Header></Header>
      <h2 className='projects-h2'><b>Projects</b></h2>
      <h3 className='projects-h3'>Web Development</h3>

      <div className='dev-body'>
        <SingleProject
          title="Persona Social Link Guide"

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

        <SingleProject
          title="Personal Site"

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
      </div>
      <Footer></Footer>
    </>
  )
}

export default Projects