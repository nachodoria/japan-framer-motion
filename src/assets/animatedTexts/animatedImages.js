import React from 'react'
import { motion } from 'framer-motion';
import "../../App.css"

const AnimatedImage = ({cname}) => {
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
            x: 0,
            transition: {
                delay: 0.2,
                type: "spring",
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
            variants={child}
            className={cname}
            style={{ overflow: "hidden", display: "flex", width: "390px", height: "700px" }}
            initial="hidden"
            whileInView="visible"
        >
            <svg className='plus-icon'></svg>
        </motion.div>
    )
}
export default AnimatedImage;
