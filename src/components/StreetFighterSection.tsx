import {motion} from "framer-motion";

import LukePNG from "../images/lukeSF6.png";
import LukeSlideshowZero from "../images/LukeSlideshow0.png";
import LukeSlideshowOne from "../images/LukeSlideshow1.png";
import LukeSlideshowTwo from "../images/LukeSlideshow2.png";
import LukeSlideshowThree from "../images/LukeSlideshow3.png";
import LukeSlideshowFour from "../images/LukeSlideshow4.png";
import StreetFighterLogo from "../images/SF6LogoSecondary.png";

import LukeGalleryOne from "../images/Luke1.png";
import LukeGalleryTwo from "../images/Luke2.png";
import LukeGalleryThree from "../images/Luke3.png";

import SF6Rank from "../images/SF6MasterRank.png";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import "../components/componentStyles/StreetFighterSection.css"

import { useRef } from "react";


const StreetFighterSection = () => {
    const sf_container = {
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
      
      const sf_item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
    
      const sf_scrollRef = useRef(null);

    return (
        <>
            <div className="header-tag" id="street-fighter-anchor"></div>
            <motion.ul
              ref={sf_scrollRef}
              className='sf_container'
              variants={sf_container}
              initial="hidden"
              whileInView="visible"
            >
              <div id="street-fighter-section">
                <motion.li
                  className="sf_item"
                  variants={sf_item}
                >
                    <img id="sf-section-logo" src={StreetFighterLogo} alt="Street Fighter 6 Logo" />
                </motion.li>

                <div>
                    <div className="sf-leftside">
                        <div className='sf-vertical-gallery'>

                          <motion.li
                            className="sf_item"
                            variants={sf_item}
                          >
                            <img src={LukeGalleryOne} alt="Luke Gallery 1" />
                          </motion.li>

                          <br />

                          <motion.li
                            className="sf_item"
                            variants={sf_item}
                          >
                            <img src={LukeGalleryTwo} alt="Luke Gallery 2" />
                          </motion.li>

                          <br />

                          <motion.li
                            className="sf_item"
                            variants={sf_item}
                          >
                            <img src={LukeGalleryThree} alt="Luke Gallery 3" />
                          </motion.li>

                        </div>

                        <motion.li
                          className="sf_item sf6-character-section"
                          variants={sf_item}
                        >
                          <img id="luke-main" src={LukePNG} alt="Luke Sullivan SF6" />
                        </motion.li>
                    </div>
                </div>

                <div className='sf-rightside'>
                  <motion.li
                    className="sf-carousel-container sf_item"
                    variants={sf_item}
                  >
                    <Carousel fade controls={false} interval={2500}>
                    <Carousel.Item>
                      <img
                        className="carousel-image d-block w-100"
                        src={LukeSlideshowZero}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="carousel-image d-block w-100"
                        src={LukeSlideshowOne}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="carousel-image d-block w-100"
                        src={LukeSlideshowTwo}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="carousel-image d-block w-100"
                        src={LukeSlideshowThree}
                        alt="Fourth slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="carousel-image d-block w-100"
                        src={LukeSlideshowFour}
                        alt="Fifth slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                  </motion.li>

                  <div className='sf-sub-list'>

                    <div className='sf-left-sub-list'>
                      <motion.li
                        className="sf_item"
                        variants={sf_item}
                      >
                        <h2>Character:</h2>
                        <p>Luke</p>
                      </motion.li>
                      <motion.li
                        className="sf_item"
                        variants={sf_item}
                      >
                        <h2>Type:</h2>
                        <p>Balanced & Aggressive</p>
                      </motion.li>
                    </div>

                    <div className='sf-right-sub-list'>
                      <motion.li
                        className="sf_item"
                        variants={sf_item}
                      >
                        <h2>Highest Rank:</h2>
                        <img src={SF6Rank} alt="Street Fighter 6 Master Rank" />
                      </motion.li>
                    </div>

                  </div>
                </div>
              </div>

              <div><img id="sf-spacing"/></div>
            </motion.ul>
        </>
    )
}

export default StreetFighterSection