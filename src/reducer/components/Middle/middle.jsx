import React, { useReducer } from 'react'
import './middle.css';
import Reducer from '../../config/reducer'

function Middle() {

    let [state, dispatch] = useReducer(Reducer, 0)
    console.log(state)
     return (
         <div>
             <h1>This is an Reducer Counter: {state}</h1>
             <button onClick={() => dispatch('INCREMENT')}>INCREMENT Reducer Counter</button>
             <button onClick={() => dispatch('DECREMENT')}>DECREMENT Reducer Counter</button>
         </div>

     )
}


export default Middle;