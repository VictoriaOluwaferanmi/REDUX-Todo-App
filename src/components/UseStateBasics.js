import React, {useState} from 'react'

const UseStateBasics = () => {

const[text,setText]=useState("Hello")

const handleClick=()=>{
  if(text==="Hello"){
      setText('now, Hi')
  }
else {
  setText("Hello")
}
}
  return (
    <React.Fragment>
    <h1>{text}</h1>
    <button onClick={handleClick}>change Value</button>
    </React.Fragment>
  )
}

export default UseStateBasics