import React, { useLayoutEffect, useRef, useState } from 'react'
import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'

import './layout.css'

const Layout = () => {
    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize( pTag.current.getBoundingClientRect() );
    }, [quote]);

    // null == null
    // !null == true
    // !!null == false  
    
    // useLayoutEffect() .- se ejecutara cuando se renderize la pantalla
    return (
        <div>
            <h1> Layout Effect </h1>
            <hr />

            <blockquote className='blockquote text-right'>
                <p className='mb-3' ref={pTag}> { quote } </p>
            </blockquote>
               
            <button className='btn btn-primary' onClick={ () => increment(1)}> Siguiente Quote </button>
            
            <pre> 
                { JSON.stringify( boxSize, null, 3) }
            </pre>
        </div>
    )
}

export default Layout