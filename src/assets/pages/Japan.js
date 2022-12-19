import '../../App.css';
import { motion } from 'framer-motion';
import AnimatedSubtitle from '../animatedTexts/animatedSubtitle';
import AnimatedTitle from "../animatedTexts/animeatedTitle"
import AnimatedP from "../animatedTexts/animatedP"



function Japan() {
  return (
    <div>
      <div className='main-container' data-scroll-container>
        <AnimatedTitle className="main-title" text={"JAPAN"} style={{ fontFamily: "Japan" }} />
        <AnimatedSubtitle className="main-title" text={"日本"} />
      </div>
      <div className='cities'>
        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='tokyo'>
          <motion.div
          initial={{ opacity: 0, x:-40, }}
          whileInView={{ opacity: 1, x:0  }}
           className='plus-icon'></motion.div>
          <AnimatedP text={"TOKYO"}></AnimatedP>
          <motion.div
           initial={{ opacity: 0, x:40 }}
           whileInView={{ opacity: 1, x:0  }}
            className='plus-icon'></motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='kyoto'>
          <motion.div
           initial={{ opacity: 0, x:-40, }}
           whileInView={{ opacity: 1, x:0  }}
            className='plus-icon'></motion.div>

          <AnimatedP text={"KYOTO"}></AnimatedP>
          <motion.div
          initial={{ opacity: 0, x:40 }}
          whileInView={{ opacity: 1, x:0  }}
           className='plus-icon'></motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='osaka'>
          <motion.div
            initial={{ opacity: 0, x:-40, }}
            whileInView={{ opacity: 1, x:0  }}
             className='plus-icon'></motion.div>
          <AnimatedP text={"OSAKA"}></AnimatedP>
          <motion.div
           initial={{ opacity: 0, x:40 }}
           whileInView={{ opacity: 1, x:0  }}
            className='plus-icon'></motion.div>

        </motion.div>

        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} className='nagoya'>
          <motion.div 
            initial={{ opacity: 0, x:-40, }}
            whileInView={{ opacity: 1, x:0  }}
            className='plus-icon'></motion.div>
          <AnimatedP text={"NAGOYA"}></AnimatedP>
          <motion.div initial={{ opacity: 0, x:40 }}
          whileInView={{ opacity: 1, x:0  }}
           className='plus-icon'></motion.div>

        </motion.div>
      </div>
    </div>
  );
}

export default Japan;