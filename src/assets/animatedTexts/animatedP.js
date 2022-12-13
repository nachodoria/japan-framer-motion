import React from 'react'
import { motion } from 'framer-motion';
import "../../App.css"

const AnimatedP = ({text}) => {
    const words = text.split(" ");

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
                delay: 1,
                damping: 18,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 60,
            transition: {
                type: "spring",
                damping: 18,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex"}}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <motion.p
                    variants={child}
                    key={index}
                    className="japan-title"
                    style={{fontFamily: "Hina Mincho", marginTop: "20px", fontSize:"30px"}}
                >
                    {word}
                </motion.p>
            ))}
        </motion.div>
    )
}


export default AnimatedP;
