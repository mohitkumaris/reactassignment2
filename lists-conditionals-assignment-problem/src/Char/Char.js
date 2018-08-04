import React from "react"

const Char =(props)=>{
   return (
     <div onClick={props.clicked}>
       {props.character}
     </div>
   );
};

export default Char;