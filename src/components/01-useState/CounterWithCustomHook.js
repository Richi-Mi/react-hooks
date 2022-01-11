import React from 'react'
import useCounter from '../../hooks/useCounter'

import './counter.css'

const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter( 51 );
    return (
        <div>
            <h1> Counter With Custom Hook { state } </h1>
            <hr />

            <button className='btn btn-primary' onClick={ () => increment( 2 ) }> +1 </button>
            <button className='btn btn-primary' onClick={ reset }> RS </button>
            <button className='btn btn-primary' onClick={ () => decrement( 2 ) }> -1 </button>
        </div>
    )
}
export default CounterWithCustomHook