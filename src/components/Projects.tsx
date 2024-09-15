// import React from 'react'
import Header from './Header'
import Footer from './Footer'

import "./componentStyles/Projects.css"
import SingleProject from './SingleProject'

const Projects = () => {
  const personaList = ['HTML', 'CSS', 'JavaScript', 'Git', 'Bootstrap'];
  const personalSiteList = ['React', 'TypeScript', 'Bootstrap', 'Vite', 'HTML', 'CSS', 'Git']

  return (
    <>
      <Header></Header>
      <h2 className='projects-h2'><b>Projects</b></h2>
      <h3 className='projects-h3'>Web Development</h3>

      <div className='dev-body'>
        <SingleProject title="hello testing" explanation="test" skills={personaList}></SingleProject>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Projects