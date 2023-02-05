import React from "react";
import './Title.css'
const Title = (props)=>{
return(
    <div>
      <div className="cont">
        <div className="burger">
         <div className="ham" ></div>
         <div className="ham"></div>
         <div className="ham"></div>
         </div>
         <div className="bg"><h1>{props.title}</h1></div>
         
      </div>
   </div>
    
)

}
export default Title