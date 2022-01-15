import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const LoginScreen = () => {
    const usuario = {
        id: new Date().getTime(),
        nombre: 'Ricardo',
        email: 'joseanakin@outlook.es'
    }
    // 1. Obtener la referencia al userContext
    const { setUser } = useContext( UserContext );
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
