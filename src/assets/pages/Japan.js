import '../../App.css';
import { delay, motion } from 'framer-motion';
import AnimatedSubtitle from '../animatedTexts/animatedSubtitle';
import AnimatedTitle from "../animatedTexts/animeatedTitle"
import AnimatedP from "../animatedTexts/animatedP"



function Japan() {

  const towns = ["Tokyo", "Kyoto", "Osaka", "Nagoya"]
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
                    <AnimatedP text={"TOKYO"}></AnimatedP>
                </motion.div>
                <motion.div
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                  className='kyoto'>
                    <AnimatedP text={"KYOTO"}></AnimatedP>
                </motion.div>
                <motion.div  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                     className='osaka'>
                    <AnimatedP text={"OSAKA"}></AnimatedP>
                </motion.div>
                <motion.div  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} className='nagoya'>
                    <AnimatedP text={"NAGOYA"}></AnimatedP>
                </motion.div>
        </div>
    </div>
  );
}

export default Japan;