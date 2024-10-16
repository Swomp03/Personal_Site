import React from 'react'
import Header from './Header'
import Footer from './Footer'

import "./componentStyles/Home.css"

import rocketImage from '../images/rocket.png'

const Home = () => {
  return (
    <>
      <Header></Header>
      <div>
        <h2 className='home-h2'>Hi! I'm <b>Robert</b>.</h2>
        <div id="home-image">
          <img src={rocketImage} alt="rocket" />
        </div>
        <h2 className="home-subtitle-h2">A <b><i>Software Developer</i></b>.</h2>
      </div>

      <div className='projects'>
        <h3>Project1</h3>

        <h3>Project2</h3>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home