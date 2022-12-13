import './App.css';
import AnimatedP from './assets/animatedTexts/animatedP';
import AnimatedSubtitle from './assets/animatedTexts/animatedSubtitle';
import AnimatedTitle from './assets/animatedTexts/animeatedTitle';

function App() {

  const towns = ["Tokyo", "Kyoto", "Osaka"]
  return (
    <>
      <div className='main-container'>
        <AnimatedTitle className="main-title" text={"JAPAN"} style={{ fontFamily: "Japan" }} />
        <AnimatedSubtitle className="main-title" text={"日本"} />
      </div>
      <div className='carrousel-towns' style={{ flexDirection: "row", display: "flex", backgroundColor:"#15161D" }}>
        {towns.map((i, a) => (
          <div style={{ disply: "flex", flexDirection: "column", padding: "100px", transform: "scale(0.8)" }}>
            <div className='images'>
              <div className={towns[a]} style={{ width: "390px", height: "700px" }}></div>
            </div>
            <div className='image-indicator'>
              <AnimatedP text={towns[a]}></AnimatedP>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
