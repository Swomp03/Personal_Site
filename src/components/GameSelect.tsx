import {motion} from "framer-motion";

import street_fighter_logo from "../images/SF6LogoNoShadow.png";
import tekken_8_logo from "../images/Tekken8Logo.png";
import guilty_gear_logo from "../images/GuiltyGearStriveLogo.png";

import luke_start from "../images/LukeScreenShot.png"
import sf_ca from "../images/SFCriticalArt.png"

import "./componentStyles/GameSelect.css";

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
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={logoAnimation(32, 650, -50)}
      >
        <h1>Hobbies: Fighting Games</h1>
      </motion.div>


      <div className="game-list">

          <div id="sf-intro">
            <img id="luke-sf-start" src={luke_start} alt="Luke Start Image" />
            <img id="sf_ca" src={sf_ca} alt="Street Fighter 6 Critical Art Bar" />
            <motion.div

              initial="hidden"
              whileInView="visible"
              variants={logoAnimation(25, 500)}

              id="sf-start"
            >
              <img id="sf-logo" src={street_fighter_logo} alt="Street Fighter 6 Logo" />
            </motion.div>

          </div>
          

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={logoAnimation(17, 350)}
            whileHover={{scale: 1.15, transition:{duration:0.2}}}
            id="tekken-start"
          >
            <img id="tekken-logo" src={tekken_8_logo} alt="Tekken 8 Logo" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={logoAnimation(13, 250)}
            whileHover={{scale: 1.15, transition:{duration:0.2}}}
            id="gg-start"
          >
            <img id="gg-logo" src={guilty_gear_logo} alt="Guilty Gear Strive Logo" />
          </motion.div>

      </div>

      <div className="game-list" id="temp">
        <img id="sf-logo" src={street_fighter_logo} alt="Street Fighter 6 Logo" />
      </div>
    </>
  );
};

export default GameSelect;
