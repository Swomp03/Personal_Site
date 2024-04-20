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

import "../components/componentStyles/GGSection.css"

// import "../components/componentStyles/TekkenSection.css"


const GuiltyGearSection = () => {

  const gg_container = {
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
  
  const gg_item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <div className="header-tag" id="guilty-gear-anchor"></div>
      <motion.ul
        className="gg_container"
        variants={gg_container}
        initial="hidden"
        whileInView="visible"
      >
        <div id="guilty-gear-section">
          <div className="GGRoundRectangle"></div>
          <motion.li
            className="gg_item"
            variants={gg_item}
          >
            <img id="gg-section-logo" src={GGLogo} alt="Guilty Gear Strive Logo" />
          </motion.li>
          <div>
            <div className="gg-leftside">
              <motion.li
                className="gg_item gg-carousel-container"
                variants={gg_item}
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
              <div className="gg-sub-list">
                <div className="gg-left-sub-list">
                  <motion.li
                    className="gg_item"
                    variants={gg_item}
                  >
                    <h2>Character:</h2>
                    <p>May</p>
                  </motion.li>
                </div>

                <div className="gg-rank-sub-list">
                  <motion.li
                    className="gg_item"
                    variants={gg_item}
                  >
                    <h2>Highest Rank:</h2>
                    <img id="gg-rank" src={GGRank} alt="Guilty Gear Strive Rank" />
                  </motion.li>
                </div>

                <div className="gg-right-sub-list">
                  <motion.li
                    className="gg_item"
                    variants={gg_item}
                  >
                    <h2>Type:</h2>
                    <p>Charge and Power</p>
                  </motion.li>
                </div>
              </div>
            </div>

            <div className="gg-rightside">
              <motion.li
                className="gg_item"
                variants={gg_item}
              >
                <img id="gg-may-rightside" src={MayPNG} alt="May Guilty Gear" />
              </motion.li>
              <div className="gg-vertical-gallery">
                <motion.li
                  className="gg_item"
                  variants={gg_item}
                >
                  <img src={MayGalleryOne} alt="May Gallery One" />
                </motion.li>

                <br />

                <motion.li
                  className="gg_item"
                  variants={gg_item}
                >
                  <img src={MayGalleryTwo} alt="May Gallery Two" />
                </motion.li>

                <br />

                <motion.li
                  className="gg_item"
                  variants={gg_item}
                >
                  <img src={MayGalleryThree} alt="May Gallery Three" />
                </motion.li>
              </div>
            </div>
          </div>
        </div>
        <div><img id="gg-spacing"/></div>

      </motion.ul>
    </>
  )
}

export default GuiltyGearSection