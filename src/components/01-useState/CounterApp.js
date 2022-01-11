import React, { useState } from 'react'
import './counter.css';

const CounterApp = () => {
    const [ state, setCounter] = useState({ 
        counter1: 10,
        counter2: 20,
        counter3: 40,
        counter4: 80
    });

    const addOne = () => {
        setCounter({
            ...state,
            counter1: counter1 + 1,
        });
    }
    const { counter1, counter2 } = state
    return (
        <>
           <h1> Counter { counter1 } </h1>
           <h1> Counter { counter2} </h1>
           <hr />

           <button className='btn btn-primary' onClick={ addOne }> + 1 </button> 
        </>
    )
}

export default CounterApp