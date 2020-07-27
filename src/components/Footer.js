import React from 'react';
import './Footer.css'

const Footer = ({style}) => {
  return (
    <div id='footer' style={style}>
      <div id='icons'>
          <li><img src="https://img.icons8.com/metro/60/000000/github.png" alt='github'/></li>
          <li><img src="https://img.icons8.com/metro/60/000000/linkedin.png" alt='linkedin'/></li>
          <li><img src="https://img.icons8.com/metro/60/000000/email.png" alt='email'/></li>
          <li><img src="https://img.icons8.com/metro/60/000000/phone.png" alt='phone'/></li>
      </div>
    </div>
  )
}

export default Footer
