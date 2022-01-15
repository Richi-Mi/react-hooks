import React, { useEffect, useReducer } from 'react';
import { useCallback } from 'react/cjs/react.development';

import './styles.css';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import todoReducer from './todoReducer';

// reducer .- Función reducer
// initialState .- estado inicial
// init .- Es una función para inicializar el state
// dispatch() .- Dispara las acciones para el reducer
// const [state, dispatch] = useReducer(reducer, initialState, init)

const init = () => {
    console.log(' - Renderize TodoApp')
    const toodos = JSON.parse(localStorage.getItem('todos'));

    return toodos !== null ? toodos : []

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]
}

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = useCallback((todoID) => {
        // action
        const actionDelete = {
            type: 'delete',
            payload: todoID
        }
        // dispatch
        dispatch(actionDelete);
    }, [dispatch]);


    const handleToggle = useCallback((todoId) => {
        const actionToggle = {
            type: 'toggle',
            payload: todoId
        }
        dispatch(actionToggle);
    }, [dispatch]);

    const handleAddTodo = ( newTodo ) => {
        const actionAdd = {
            type: 'add',
            payload: newTodo
        }

        dispatch(actionAdd);
    }

    return (
        <div>
            <h1> TodoApp ({todos.length}) </h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>

                <div className='col-5'>
                    <TodoAdd handleAddTodo={ handleAddTodo } />
                </div>
            </div>
        </div>
    )
}


export default TodoApp
