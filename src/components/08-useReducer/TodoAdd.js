import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.development';
import PropTypes from 'prop-types';

const TodoAdd = ({ handleAddTodo }) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (ev) => {
        setInputValue(ev.target.value);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (inputValue.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: inputValue,
            done: false
        }
        
        setInputValue('');

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
                    onChange={handleInputChange}
                    value={inputValue}
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
