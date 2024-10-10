import React, { useState } from 'react'
import Img from './image.jpg'
import './Body.css'

const StateHandle = () => {

    const[like, setLike]= useState(0)
    const[name,setName]=useState("Hii welcome to my website")
    function decrement()
    {
        if(like===0){
          setLike(0)
        }
        else{
          setLike(like-1)
        }
    }
    function change()
    {
      setName("HARINI")
    }
    function old()
    {
      setName("Hii welcome to my website")
    }
  return (

    <div>
      <center>
        <h1 onMouseEnter={change} onMouseLeave={old}>{name} </h1>
        </center>   
      <img src={Img} alt="" />
        <p>
            {like}
        </p>
        <button onClick={() =>setLike(like+1)}>Like</button>
        <button onClick={decrement}>DisLike</button>
        
        
        
    </div>
    
  )
}

export default StateHandle