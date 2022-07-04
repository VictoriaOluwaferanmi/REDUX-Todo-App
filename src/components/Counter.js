import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,reset } from '../redux/slice'

const Counter = () => {
   const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>

      <h1>{count}</h1>
     <button id='increase-button'
          
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      
        <button
         id='decrease-button' onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
         <button  id='reset-button'
          onClick={() => dispatch(reset())}
        >
         Reset
        </button>
    </div>
  )
}

export default Counter