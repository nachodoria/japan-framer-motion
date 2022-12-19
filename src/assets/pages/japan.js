import '../../App.css';
import { motion } from 'framer-motion';
import AnimatedSubtitle from '../animatedTexts/animatedSubtitle';
import AnimatedTitle from "../animatedTexts/animeatedTitle"
import AnimatedP from "../animatedTexts/animatedP"
import AnimatedCitie from '../animatedTexts/animatedCitie';



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
          <AnimatedCitie text="TOKYO"></AnimatedCitie>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='kyoto'>
         <AnimatedCitie text="KYOTO"></AnimatedCitie>

        </motion.div>

        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='osaka'>
          <AnimatedCitie text="OSAKA"></AnimatedCitie>


        </motion.div>

        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} className='nagoya'>
          <AnimatedCitie text="NAGOYA"></AnimatedCitie>

        </motion.div>
      </div>
    </div>
  );
}

export default Japan;