import React from 'react'
import { motion } from 'framer-motion';
import "../../App.css"

const AnimatedCitie = ({ text }) => {
    const words = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.14, delayChildren: 0.04 * i },
        }),
    };

    const childText = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                delay: 0.4,
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
    const childPlus = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                delay: 0.4,
                damping: 18,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
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
            <motion.div
                style={{ overflow: "hidden", display: "flex" }}
                variants={childPlus}
                initial="hidden"
                whileInView="visible"
                className='plus-icon'
            >
            </motion.div>
            {words.map((word, index) => (
                <motion.p
                    variants={childText}
                    key={index}
                    className="titles"
                    style={{ fontFamily: "Hakubo", marginTop: "20px", fontSize: "40px" }}
                >
                    {word}
                </motion.p>
            ))}
            <motion.div
                style={{ overflow: "hidden", display: "flex" }}
                variants={childPlus}
                initial="hidden"
                whileInView="visible"
                className='plus-icon'
            >
            </motion.div>
        </motion.div>
    )
}


export default AnimatedCitie;
