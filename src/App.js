import React,{ useState } from 'react';
import Introduction from './components/introduction/Introduction';
import Footer from './components/footer/Footer';
import './App.css';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Project from './components/project/Project';
import SideBar from './components/sidebar/SideBar';
import route from './router/route';

function App() {
  let [section, setSection] = useState(0);
  let wheelCounter = 0;
  
  const mousseRoll = (e) => {
    let sectionNumber = 0;
    wheelCounter = wheelCounter + e.deltaY;     
    sectionNumber = route(wheelCounter, section);
    if(sectionNumber !== -1){
      setSection(section = sectionNumber)
      wheelCounter = 0;
    }
  }
  const clickSection = () => {
    if(section < 6){
      console.log('next')
      setSection(section = section +1)
    }else{
      setSection(section = 0)
    } 
  }
  
  return (
    <div id='main-container' onWheel={(e) => mousseRoll(e)} onClick={clickSection}>
      <h2 onClick={() => setSection(section = 0)}>Adrian Monteil</h2>
      <SideBar rolling={section === 6?true:false}/>
      <SwitchTransition>
          <CSSTransition key={section} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)} classNames="fade">
            {
              (() => {
                if(section === 6 ){
                  return <Footer/>
                }else if(section > 0 && section < 6) {
                  return <Project page={section -1}/>
                }else{
                  return <Introduction/>
                }
              })()
            }
          </CSSTransition>
        </SwitchTransition>
        <div id='mousse' className='rolling'>
          <img src="https://img.icons8.com/ios/30/000000/generic-mouse.png" alt='mousse'/>
        </div>
        <p id="page">{section+1}/7</p>
    </div>
   
  )
}

export default App;
