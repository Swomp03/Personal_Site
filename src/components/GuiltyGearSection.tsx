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
      <motion.ul
        className="gg_container"
        variants={gg_container}
        initial="hidden"
        whileInView="visible"
      >
        <motion.li
          className="gg_item"
          variants={gg_item}
        >
          <img id="gg-section-logo" src={GGLogo} alt="Guilty Gear Strive Logo" />
        </motion.li>
      </motion.ul>
    </>
  )
}

export default GuiltyGearSection