import React, { useCallback, useEffect, useState } from 'react'
import '../02-useEffect/effects.css'
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    // Creamos una función que solo se renderizara si se cumplen los requisitos o si setCounter cambia
    const increment = useCallback( ( num ) => {
        setCounter( counter => counter + num );
    }, [ setCounter ])

    useEffect(() => {
        // ???
    }, [ increment ]);

    return (
        <div>
            <h1> Use Callback Hook </h1>
            <h2> Counter { counter } </h2>

            <hr />

            <ShowIncrement increment={ increment }/>
        </div>
    )
}

export default CallbackHook
