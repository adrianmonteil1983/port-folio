import React from 'react';
import './SideBar.css'

const SideBar = () => {
  return (
    <div id='sidebar-container'>
      <ul id='contact'>
        <li><a href='https://github.com/adrianmonteil1983' target='_blank'rel="noopener noreferrer"><img src="https://img.icons8.com/metro/25/000000/github.png" alt='github'/></a></li>
        <li><a href='linkedin.com/in/adrianmonteil' target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/metro/25/000000/linkedin.png" alt='linkedin'/></a></li>
        <li><a href='mailto:monteiladrian@gmail.com' target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/metro/25/000000/email.png" alt='email'/></a></li>
        <li><a href='tel:+13473251581”' target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/metro/25/000000/phone.png" alt='phone'/></a></li>
      </ul>
    </div>
  )
}

export default SideBar
