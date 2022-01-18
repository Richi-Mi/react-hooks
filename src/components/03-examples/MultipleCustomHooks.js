import React from 'react'
import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'

import '../02-useEffect/effects.css'

const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { author, quote } = !!data && data[0];

    // null == null
    // !null == true
    // !!null == false  
    
    return (
        <div className='multiple_component'>
            <h1> Breakin Bad Quotes </h1>
            <hr />

            {
                loading === true ? (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                ) : (
                    <blockquote className='blockquote text-right'>
                        <p className='mb-3'> { quote } </p>
                        <footer className='blockquote-footer'> { author } </footer>
                    </blockquote>
                )
            }
            <button className='btn btn-primary' onClick={ () => increment(1)}> Siguiente Quote </button>
            
        </div>
    )
}

export default MultipleCustomHooks