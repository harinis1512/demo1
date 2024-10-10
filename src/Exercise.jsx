import React, { useState } from 'react'
import Img from './image.jpg'
import Harini from './scenaryy.jpg'
import './Body.css'

const Exercise = () => {

    const[image,setImage]=useState(Img)
    function change()
    {
        setImage(Harini)
    }
    function old()
    {
        setImage(Img)
    }
    
  return (
    <div> 
        <img src={image}onMouseEnter={change} onMouseLeave={old}/>

    </div>
  )
}

export default Exercise