import {motion} from "framer-motion";

import MayPNG from "../images/MayGGS.png";
import MaySlideshowZero from "../images/MayIntro.jpg";
import MaySlideshowOne from "../images/MaySlideshow1.png";
import MaySlideshowTwo from "../images/MaySlideshow2.png";
import MaySlideshowThree from "../images/MaySlideshow3.png";
import MaySlideshowFour from "../images/MaySlideshow4.png";
import GGLogo from "../images/GuiltyGearStriveLogo.png"

import MayGalleryOne from "../images/May1.png";
import MayGalleryTwo from "../images/May2.png";
import MayGalleryThree from "../images/May3.png";

import GGRank from "../images/GGRank.png"

import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css";

// import "../components/componentStyles/TekkenSection.css"


const GuiltyGearSection = () => {

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
        <div id="gg-section">
          <motion.li
            className="item"
            variants={item}
          >
            <img id="gg-logo" src={GGLogo} alt="Guilty Gear Strive Logo" />
          </motion.li>

          <div>
            <div className="leftside">
              
              <div className="vertical-gallery">

                <motion.li
                  className="item"
                  variants={item}
                >
                  <img src={MayGalleryOne} alt="May Gallery 1" />
                </motion.li>

                <br />

                <motion.li
                  className="item"
                  variants={item}
                >
                  <img src={MayGalleryTwo} alt="May Gallery 2" />
                </motion.li>

                <br />

                <motion.li
                  className="item"
                  variants={item}
                >
                  <img src={MayGalleryThree} alt="May Gallery 3" />
                </motion.li>

              </div>

              <motion.li
                className="item"
                variants={item}
                id="victor-main"
              >
                <img src={MayPNG} alt="May" />
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
                      src={MaySlideshowZero}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="carousel-image d-block w-100"
                      src={MaySlideshowOne}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="carousel-image d-block w-100"
                      src={MaySlideshowTwo}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="carousel-image d-block w-100"
                      src={MaySlideshowThree}
                      alt="Fourth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="carousel-image d-block w-100"
                      src={MaySlideshowFour}
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
                    <p>May</p>
                  </motion.li>

                  <motion.li
                    className="item"
                    variants={item}
                  >
                    <h2>Type:</h2>
                    <p>Power & Charge</p>
                  </motion.li>
                </div>

                <motion.li
                  variants={item}
                  className="item right-sub-list"
                >
                  <h2>Highest Rank:</h2>
                  <img src={GGRank} alt="Guilty Gear Strive Rank" />
                </motion.li>
              </div>
              
            </div>
          </div>
        </div>
      </motion.ul>
    </>
  )
}

export default GuiltyGearSection