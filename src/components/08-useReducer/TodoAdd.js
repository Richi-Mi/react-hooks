import React from 'react';
import { Fragment } from 'react/cjs/react.development';
import PropTypes from 'prop-types';
import useForm from '../../hooks/useForm';

const TodoAdd = ({ handleAddTodo }) => {
    const [{ description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    const handleSubmit = ( ev, descrip = description ) => {
        ev.preventDefault();

        if (descrip.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: descrip,
            done: false
        }
        
        reset();
        handleAddTodo( newTodo );
    }

    return (
        <Fragment>
            <h4> Agregar Tarea </h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='description'
                    placeholder='Aprender...'
                    autoComplete='off'
                    className='form-control mb-3'
                    onChange={ ( ev ) => handleInputChange( ev ) }
                    value={ description }
                />
                <button
                    className='btn btn-outline-primary form-control'
                    type='submit'
                >
                    Agregar
                </button>
            </form>
        </Fragment>
    )
}

TodoAdd.propTypes = {
    handleAddTodo: PropTypes.func.isRequired
}

export default TodoAdd
