import React, {useEffect} from 'react';
import './SideBar.css'

const SideBar = ({rolling}) => {
  useEffect(() => {

  })
  return (
    <div id='sidebar-container' className={rolling?'rotate':null}>
        <li className={rolling?'sidegap':null}><a href='https://github.com/adrianmonteil1983' target='_blank'rel="noopener noreferrer"><img src="https://img.icons8.com/metro/60/000000/github.png" alt='github' className={rolling?'fatimg':null} /></a></li>
        <li className={rolling?'sidegap':null}><a href='https://linkedin.com/in/adrianmonteil' target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/metro/60/000000/linkedin.png" alt='linkedin' className={rolling?'fatimg':null}/></a></li>
        <li className={rolling?'sidegap':null}><a href='mailto:monteiladrian@gmail.com' target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/metro/60/000000/email.png" alt='email' className={rolling?'fatimg':null}/></a></li>
        <li><a href='tel:+13473251581”' target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/metro/60/000000/phone.png" alt='phone' className={rolling?'fatimg':null}/></a></li>
    </div>
  )
}

export default SideBar 
