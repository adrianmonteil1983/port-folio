import React,{useState} from 'react';
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
    if(section === 5 || section < 0){
      setSection(section = 0)
    }else if(e.deltaY > 0){
      setSection(section = section +1)
    }else if(e.deltaY < 0){
      setSection(section = section -1)
    }
  }
  return (
    <div id='main-container' onWheel={(e) => fade(e)} >
      <h2 onClick={() => setSection(section = 0)}>Adrian Monteil</h2>
      {(section !== 5) 
        ?<SideBar/>
        :null
      } 
      <SwitchTransition>
          <CSSTransition key={section} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)} classNames="fade">
            {
              (() => {
                if(section === 5 ){
                  return <Footer/>
                }else if(section > 0 && section < 5) {
                  return <Project page={section -1}/>
                }else{
                  return <Introduction/>
                }
              })()
            }
          </CSSTransition>
        </SwitchTransition>  
    </div>
   
  )
}

export default App;
