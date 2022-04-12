import React, { useState } from 'react'
import { AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
function Counter({value}) {
   let [counter,setCounter]=useState(value)
   const increase =  ( ) => {
       setCounter(++counter); 
   }
   const decrease =  ( ) => {
    setCounter(--counter); 
}
    return (
        <div>
          <h1>
              {counter}
          </h1>
       <button className='btn btn-success mx-2' onClick={increase}><AiFillPlusCircle /></button>
       <button className='btn btn-danger mx-2' onClick={decrease}><AiFillMinusCircle /></button>
       
      </div>
    )
}

export default Counter