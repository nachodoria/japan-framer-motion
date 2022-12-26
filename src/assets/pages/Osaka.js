import React from 'react'
import "../../App.css";
import { motion } from 'framer-motion';
import arrowback from "../images/arrow-back.svg";
import { Link } from 'react-router-dom';



function Osaka() {

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
      className='osaka-container'>
      <Link to="/"><img src={arrowback} className='arrow-back'></img></Link>

      <div className='osaka-info'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="osaka-image"
        >
        </motion.div>


        <motion.h5
          style={{ overflow: "hidden", display: "flex" }}
          variants={secondary}
          initial="hidden"
          whileInView="visible"
        >Osaka is a charming, relaxed city best known for its food, fun and nightlife—with some history and culture peeking through. Osaka is only a short shinkansen ride from Tokyo, but has a very different personality to Japan's capital city.
        </motion.h5>
      </div>
    </motion.div>
  )
}

export default Osaka