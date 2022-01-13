import { useState } from "react"

const useCounter = ( initialState = 10 ) => {
    const [state, setState] = useState( initialState );

    const increment = ( factor = 1 ) => {
        setState( state + factor );
    }
    const reset = () => {
        setState( initialState );
    }
    const decrement = ( factor = 1 ) => {
        setState( state - factor );
    }
    return {
        counter: state,
        increment,
        decrement,
        reset
    }
}

export default useCounter