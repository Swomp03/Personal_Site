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
      <Footer></Footer>
    </>
  )
}

export default Home