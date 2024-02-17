import {motion} from "framer-motion";

import VictorPNG from "../images/VictorChevalierTekken8.png"
import VictorSlideshowZero from '../images/VictorSlideshow0.png';
import VictorSlideshowOne from '../images/VictorSlideshow1.png';
import VictorSlideshowTwo from '../images/VictorSlideshow2.png';
import VictorSlideshowThree from '../images/VictorSlideshow3.png';
import VictorSlideshowFour from '../images/VictorSlideshow4.png';
import TekkenLogo from "../images/Tekken8Logo.png"

import VictorGalleryOne from '../images/Victor1.png'
import VictorGalleryTwo from '../images/Victor2.png'
import VictorGalleryThree from '../images/Victor3.png'

import Tekken8Rank from '../images/Tekken8Garyu.png'

import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css";

import "../components/componentStyles/TekkenSection.css"
// import '../components/componentStyles/GameSelect.css'


const TekkenSection = () => {
  return (
    <>
      <div id="tekken-section">
        <img id="tekken-logo" src={TekkenLogo} alt="Tekken 8 Logo" />

        <div>      
          <div className="leftside">
            <img id="victor-main" src={VictorPNG} alt="Victor Chevalier" />

            <div className="vertical-gallery">
              <img src={VictorGalleryOne} alt="Victor Gallery 1" />
              <br />
              <img src={VictorGalleryTwo} alt="Victor Gallery 2" />
              <br />
              <img src={VictorGalleryThree} alt="Victor Gallery 3" />
            </div>
          </div>

          <div className="rightside">
            <div className="carousel-container rightside">
              <Carousel fade controls={false}>
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
            </div>
            
            <div className="sub-list">
              <div className="left-sub-list">
                <h2>Character:</h2>
                <p>Victor Chevalier</p>
                <h2>Type:</h2>
                <p>Counterhit & Commital</p>
              </div>

              <div className="right-sub-list">
                <h2>Highest Rank:</h2>
                <img src={Tekken8Rank} alt="Tekken 8 Rank" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default TekkenSection