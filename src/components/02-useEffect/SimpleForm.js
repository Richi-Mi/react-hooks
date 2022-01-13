import React, { Fragment, useEffect, useState } from 'react'
import './effects.css'
import Message from './Message'

const SimpleForm = () => {
    // Jamas meter el useState() dentro de un condicional,
    // siempre usar los hooks en lo mas alto del componente
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })
    const { name, email } = formState
    useEffect(() => {
        // console.log(' Hey bro, without Me ');
    }, []);

    useEffect(() => {
        // console.log(' HEY, cambio el formulario crack');
    }, [ formState ]);

    useEffect(() => {
        // console.log(' HEY, cambio el email crack');
    }, [ email ]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value 
        })
    }
    return (
        <Fragment>
            <h1> useEffect </h1>
            <hr />

            <div className='form-group'>
                <input 
                    type={"text"}
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    onChange={ handleInputChange }
                />
            </div>
            <div className='form-group'>
                <input 
                    type="email"
                    name='email'
                    className='form-control'
                    placeholder='emailtuyo@hootmail.com'
                    autoComplete='off'
                    onChange={ handleInputChange }
                />
            </div>
            { (name === 'richi') && <Message />}
        </Fragment>
    )
}
export default SimpleForm