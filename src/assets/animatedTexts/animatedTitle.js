import React from 'react'
import { motion } from 'framer-motion';
import "../../App.css"

const AnimatedTitle = ({text}) => {
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
                damping: 18,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 30,
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
            whileInView="visible"
        >
            {words.map((word, index) => (
                <motion.h1
                    variants={child}
                    key={index}
                    className="japan-title"
                    style={{color: index == 1 ? "#BC012C" : "white"}}
                >
                    {word}
                </motion.h1>
            ))}
        </motion.div>
    )
}


export default AnimatedTitle;
