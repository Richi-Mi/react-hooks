import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const LoginScreen = () => {
    // 1. Obtener la referencia al userContext
    const { setUser, user } = useContext( UserContext );
    const usuario = {
        id: new Date().getTime(),
        ...user
    }
    // 2. setUser 
    return (
        <div>
            <h1> Login Screen </h1>
            <hr />

            <button className='btn btn-primary' onClick={ () => setUser( usuario ) }> Login </button>
            <button className='btn btn-danger' onClick={ () => setUser({}) }> LogOut </button>
        </div>
    )
}

export default LoginScreen
