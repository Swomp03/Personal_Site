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

  const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.05
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };





  return (
    <>
      <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        <div id="tekken-section">
          <motion.li
            className="item"
            variants={item}
          >
            <img id="tekken-logo" src={TekkenLogo} alt="Tekken 8 Logo" />
          </motion.li>

          <div>
            <div className="leftside">
              
              <div className="vertical-gallery">

                <motion.li
                  className="item"
                  variants={item}
                >
                  <img src={VictorGalleryOne} alt="Victor Gallery 1" />
                </motion.li>

                <br />

                <motion.li
                  className="item"
                  variants={item}
                >
                  <img src={VictorGalleryTwo} alt="Victor Gallery 2" />
                </motion.li>

                <br />

                <motion.li
                  className="item"
                  variants={item}
                >
                  <img src={VictorGalleryThree} alt="Victor Gallery 3" />
                </motion.li>

              </div>

              <motion.li
                className="item"
                variants={item}
                id="victor-main"
              >
                <img src={VictorPNG} alt="Victor Chevalier" />
              </motion.li>

            </div>

            <div className="rightside">
              <motion.li
                variants={item}
                className="item carousel-container rightside"
              >

                <Carousel fade controls={false} interval={2500}>
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

              </motion.li>
              
              <div className="sub-list">
                <div className="left-sub-list">
                  <motion.li
                    className="item"
                    variants={item}
                  >
                    <h2>Character:</h2>
                    <p>Victor Chevalier</p>
                  </motion.li>

                  <motion.li
                    className="item"
                    variants={item}
                  >
                    <h2>Type:</h2>
                    <p>Counterhit & Commital</p>
                  </motion.li>
                </div>

                <motion.li
                  variants={item}
                  className="item right-sub-list"
                >
                  <h2>Highest Rank:</h2>
                  <img src={Tekken8Rank} alt="Tekken 8 Rank" />
                </motion.li>
              </div>
              
            </div>
          </div>
        </div>
      </motion.ul>
    </>
  )
}

export default TekkenSection