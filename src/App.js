import React,{ useState } from 'react';
import Introduction from './components/introduction/Introduction';
import Footer from './components/footer/Footer';
import './App.css';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Project from './components/project/Project';
import SideBar from './components/sidebar/SideBar';



function App() {
  let [section, setSection] = useState(0);

  const fade = (e) => {
    console.log(e.deltaY)
    if(e.deltaY > 0 && section < 6){
      setSection(section = section +1)
    }else if(e.deltaY < 0 && section > 0){
      setSection(section = section -1)
    }else{
      setSection(section = 0)
    }
  }
  return (
    <div id='main-container' onWheel={(e) => fade(e)}>
      <h2 onClick={() => setSection(section = 0)}>Adrian Monteil</h2>
      {(section !== 6) 
        ?<SideBar/>
        :null
      } 
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
