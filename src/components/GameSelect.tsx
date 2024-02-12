import {motion} from "framer-motion";

import street_fighter_logo from "../images/SF6LogoNoShadow.png";
import tekken_8_logo from "../images/Tekken8Logo.png";
import guilty_gear_logo from "../images/GuiltyGearStriveLogo.png";

import luke_start from "../images/LukeScreenShot.png"
import sf_ca from "../images/SFCriticalArt.png"

import victor_start from "../images/VictorThumbnail.png"
import tekken_health from "../images/TekkenHealth.png"

import may_start from "../images/MayScreenshot.png"
import gg_burst from "../images/GGBurst.png"

import "./componentStyles/GameSelect.css";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const GameSelect = () => { 

  const logoAnimation = (dampingAmount: Number, stiffnessAmount: Number, yVal = 50) => ({
    hidden: {
      opacity: 0,
      y: yVal
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1, type:"spring", damping: dampingAmount, stiffness: stiffnessAmount
      }
    }
  });

  

  return (
    <>
      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        variants={logoAnimation(32, 650, -50)}
      >
        <h1>Hobbies: Fighting Games</h1>
      </motion.div> */}

      <h1 className="hobby-title">Hobbies: Fighting Games</h1>


      <div className="game-list">

          <div id="sf-intro">
            <img id="luke-sf-start" src={luke_start} alt="Luke Start Image" />
            <img id="sf-ca" src={sf_ca} alt="Street Fighter 6 Critical Art Bar" />
            <motion.div

              initial="hidden"
              whileInView="visible"
              variants={logoAnimation(25, 500)}

              id="sf-start"
            >
              <img id="sf-logo" src={street_fighter_logo} alt="Street Fighter 6 Logo" />
            </motion.div>

          </div>
          
          <div id="tekken-intro">
            <img id="victor-tekken-start" src={victor_start} alt="Victor Start Image" />
            <img id="tekken-health" src={tekken_health} alt="Tekken 8 Health" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={logoAnimation(17, 350)}
              id="tekken-start"
            >
              <img id="tekken-logo" src={tekken_8_logo} alt="Tekken 8 Logo" />
            </motion.div>
          </div>

          <div id="gg-intro">
            <img id="may-gg-start" src={may_start} alt="May Start Image" />
            <img id="gg-burst" src={gg_burst} alt="Guilty Gear Strive Health" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={logoAnimation(13, 250)}
              id="gg-start"
            >
              <img id="gg-logo" src={guilty_gear_logo} alt="Guilty Gear Strive Logo" />
            </motion.div>
          </div>

      </div>

      <div className="game-list" id="temp">
      </div>
    </>
  );
};

export default GameSelect;
