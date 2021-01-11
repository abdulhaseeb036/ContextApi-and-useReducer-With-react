import React, { useState } from 'react'
import './middle.css';

function Middlecontext() {
    let counter = useState(0);

     return (
         <div>
             <h1>This is an Context api Counter: {counter[0]}</h1>
             <button onClick={() => {counter[1](++counter[0])}}>INCREMENT ContextApi Counter</button>
             <button onClick={() => {counter[1](--counter[0])}}>DECREMENT ContextApi Counter</button>

         </div>

     )
}


export default Middlecontext;