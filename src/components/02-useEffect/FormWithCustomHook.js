import React, { Fragment, useEffect } from 'react'
import useForm from '../../hooks/useForm';
import './effects.css';

const FormWithCustomHook = () => {
    // Jamas meter el useState() dentro de un condicional,
    // siempre usar los hooks en lo mas alto del componente

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    })
    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('Email Cambio')
        
    }, [email])

    const handleSubmit = ( ev ) => {
        ev.preventDefault();

        console.log( formValues );
    }
    return (
        <form onSubmit={ handleSubmit }>
            <h1> FormWithCustomHook </h1>
            <hr />

            <div className='form-group'>
                <input 
                    type={"text"}
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
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
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>
            <div className='form-group'>
                <input 
                    type="password"
                    name='password'
                    className='form-control'
                    placeholder='*****'
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <button type='submit' className='btn btn-primary'> Guardar </button>
        </form>
    )
}
export default FormWithCustomHook