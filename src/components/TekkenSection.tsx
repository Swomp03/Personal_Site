import {motion} from "framer-motion";

import VictorPNG from "../images/VictorChevalierTekken8.png"
import VictorSlideshowZero from '../images/VictorSlideshow0.png';
import VictorSlideshowOne from '../images/VictorSlideshow1.png';
import VictorSlideshowTwo from '../images/VictorSlideshow2.png';
import VictorSlideshowThree from '../images/VictorSlideshow3.png';
import VictorSlideshowFour from '../images/VictorSlideshow4.png';
import TekkenLogo from "../images/Tekken8Logo.png"


import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css";

import "../components/componentStyles/TekkenSection.css"
// import '../components/componentStyles/GameSelect.css'


const TekkenSection = () => {
  return (
    <>
      <img id="tekken-logo" src={TekkenLogo} alt="Tekken 8 Logo" />

      <div>      
        <div className="leftside">
          <img src={VictorPNG} alt="Victor Chevalier" />
        </div>

        <div className="rightside">
          <div className="carousel-container rightside">
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="carousel-image d-block w-100"
                  src={VictorSlideshowZero}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-image d-block w-100"
                  src={VictorSlideshowOne}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-image d-block w-100"
                  src={VictorSlideshowTwo}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-image d-block w-100"
                  src={VictorSlideshowThree}
                  alt="Fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-image d-block w-100"
                  src={VictorSlideshowFour}
                  alt="Fifth slide"
                />
              </Carousel.Item>
            </Carousel>

            <h2>Character:</h2>
            <p>Caption</p>
            <h2>Highest Rank:</h2>
            <p>Test</p>
            <h2>Character Type:</h2>
            <p>Counterhit & Commital</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TekkenSection