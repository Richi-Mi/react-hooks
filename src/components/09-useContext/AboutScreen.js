import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const AboutScreen = () => {
    const { user } = useContext( UserContext ); // Obtenemos una propiedad del Context
    return (
        <div>
            <h1> About App </h1>
            <hr />

            <pre className='container'>
                { JSON.stringify( user, null, 3 )}
            </pre>
        </div>
    )
}

export default AboutScreen
