import '../../App.css';
import { motion } from 'framer-motion';
import AnimatedSubtitle from '../animatedTexts/animatedSubtitle';
import AnimatedTitle from "../animatedTexts/animatedTitle"
import AnimatedP from "../animatedTexts/animatedP"
import AnimatedCitie from '../animatedTexts/animatedCitie';
import { Link } from 'react-router-dom';



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
         <Link to="/tokyo"><AnimatedCitie text={"TOKYO"}></AnimatedCitie></Link>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='kyoto'>
         <Link to="/kyoto"><AnimatedCitie text={"KYOTO"}></AnimatedCitie></Link>

        </motion.div>

        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='osaka'>
         <Link to="/osaka"><AnimatedCitie text={"OSAKA"}></AnimatedCitie></Link>


        </motion.div>

        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} className='nagoya' 
          >
         <Link to="/nagoya"><AnimatedCitie text={"NAGOYA"}></AnimatedCitie></Link>

        </motion.div>
      </div>
    </div>
  );
}

export default Japan;