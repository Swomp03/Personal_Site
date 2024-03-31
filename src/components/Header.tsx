// import React from 'react'
import "./componentStyles/Header.css"

const Header = () => {
  return (
    <div id="site-header">
        <a href="/" id="home-button"><h3>Home</h3></a>
        <a href="/" id="projects-button"><h3>Projects</h3></a>
        <a href="/" id="hobbies-button"><h3>Hobbies</h3></a>
    </div>
  )
}

export default Header