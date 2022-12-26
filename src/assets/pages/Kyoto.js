import React from 'react'
import "../../App.css";
import { motion } from 'framer-motion';
import arrowback from "../images/arrow-back.svg";
import { Link } from 'react-router-dom';


function Kyoto() {
  
  const secondary = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 0.6,
        damping: 18,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 90,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className='kyoto-container'>
    <Link to="/"><img src={arrowback} className='arrow-back'></img></Link>
  

    <div className='kyoto-info'>
    <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         className="kyoto-image"
        >
        </motion.div>
      <motion.h5
         style={{ overflow: "hidden", display: "flex"}}
        variants={secondary}
        initial="hidden"
        whileInView="visible"
      >
        Kyoto, located in the Kansai region of Japan, is the country's seventh largest city, with a population of 1.4 million people. Steeped in history, Kyoto is home to roughly one quarter of Japan's national treasures, countless shrines and temples, and seventeen sites recognized by UNESCO as World Heritage Sites.</motion.h5>
    </div>
  </motion.div>
  )
}


export default Kyoto