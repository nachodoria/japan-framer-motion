import React from 'react'
import { motion } from 'framer-motion';
import "../../App.css"

const AnimatedCitie = ({text}) => {
    const words = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.14, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                delay: 0.2,
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
            style={{ overflow: "hidden", display: "flex" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
        >
            
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    className="titles"
                    style={{ fontFamily: "Hakubo", marginTop: "20px", fontSize: "40px" }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
       
    )
}


export default AnimatedCitie;
