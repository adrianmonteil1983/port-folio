import React from 'react'
import './Popup.css'

const Popup = ({appear}) => {
  return (
    <div id='containerpopup'>
      <button onClick={() => {console.log('popup'); appear ()}}>OK</button>
    </div>
  )
}

export default Popup
