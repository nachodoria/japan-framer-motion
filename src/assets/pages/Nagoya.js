import React from 'react'
import "../../App.css";
import { motion } from 'framer-motion';
import arrowback from "../images/arrow-back.svg";
import { Link } from 'react-router-dom';



function Nagoya() {
  
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
    className='nagoya-container'>
    <Link to="/"><img src={arrowback} className='arrow-back'></img></Link>
    

    <div className='nagoya-info'>
    <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         className="nagoya-image"
        >
        </motion.div>

      <motion.h5
        variants={secondary}
        initial="hidden"
        whileInView="visible"
      >Nagoya, located at the center of Honshu (the main island of Japan), is Japan's fourth most populated city with 2.24 million residents. Nagoya has a long history and is the birthplace of three notable feudal lords, Oda Nobunaga, Toyotomi Hideyoshi and Tokugawa Ieyasu.
      </motion.h5>
    </div>
  </motion.div>
  )
}

export default Nagoya