import React from 'react'
import {FcSearch} from 'react-icons/fc'
import './style.css'

const Left = ({name}) => {
  return (
    <div className='left__section'>
      {name}
      <FcSearch/>
    </div>
  )
}

export default Left
