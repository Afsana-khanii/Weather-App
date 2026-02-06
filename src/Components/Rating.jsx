import React, { useState } from "react";

const Rating =()=>{
    const [rating ,setRating]= useState()
    const [hover,setHover]= useState()
    let arr = new Array(5).fill(0);
    
    return (
        <div className = 'container'>
     {
        arr.map((curVal,index)=>{
            return(
         <span className={index < rating || index<hover? "colored":"unColored"}
         onMouseEnter={()=>setHover(index)}
          onClick={()=>setRating(index + 1)} key = {index + 1}>	&#9733; </span>
             )
        })
     }
        </div>
    )
}
export default Rating