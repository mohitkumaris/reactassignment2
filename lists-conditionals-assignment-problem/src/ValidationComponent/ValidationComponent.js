import React from "react"

const validationcomponent=(props)=>{
  let ValidationMessage="";
  if(props.lengthofString < 5){
    ValidationMessage="Length is short"
  }
  else{
    ValidationMessage="Length is Long enough"
  }

  return(
    <div>

      <p>{ValidationMessage}</p>

    </div>
  )
};

export default validationcomponent