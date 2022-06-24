import React, {useState} from 'react'


const Counter = () => {
const[data, setData]=useState(0)

function deCount(){
    setData(data - 1)
}

function inCount(){

setData(data + 1);

}
function reset(){
    setData(0)
}

  return (
    <React.Fragment>
    <h2 id='counter-value'>{data} </h2>
    <button id="increase-button"  onClick= {inCount}>   Increase    </button>
    <button  id="decrease-button" onClick= {deCount}>   Decrease</button>
    <button  id="reset-button"    onClick=    {reset}>        Reset      </button>
    </React.Fragment>
  )
}

export default Counter