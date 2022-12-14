import '../../App.css';
import { motion } from 'framer-motion';
import AnimatedImage from '../animatedTexts/animatedImages';
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
      <div className='carrousel-towns' style={{height:"110vh", flexDirection: "row", display: "flex", backgroundColor:"#15161D" }}>
        {towns.map((i, a) => (
          <div style={{ disply: "flex", flexDirection: "column", padding: "100px", transform: "scale(0.8)" }}>
            <div className='images'>
              <AnimatedImage cname={towns[a]}></AnimatedImage>
            </div>
            <div className='image-indicator'>
              <AnimatedP text={towns[a]}></AnimatedP>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Japan;