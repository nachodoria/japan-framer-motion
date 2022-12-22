import React from 'react';
import "../../App.css";
import { motion } from 'framer-motion';
import arrowback from "../images/arrow-back.svg";
import { Link } from 'react-router-dom';


function Tokyo() {
  
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
        className='tokyo-container'>
        <Link to="/"><img src={arrowback} className='arrow-back'></img></Link>
       
        <div className='tokyo-info'>
        <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         className="tokyo-image"
        >
        </motion.div>
          <motion.h5
            variants={secondary}
            initial="hidden"
            whileInView="visible"
          >Tokyo is the administrative, cultural, financial, commercial, and educational centre of Japan and the focus of an extensive urban complex that includes Kawasaki and Yokohama. Attractions include the Imperial Palace, encircled by stone-walled moats and broad gardens, and numerous temples and shrines.</motion.h5>
        </div>
      </motion.div>
  )

}

export default Tokyo