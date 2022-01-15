import React from 'react'
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = React.memo(({ todos, handleDelete, handleToggle }) => {
    console.log(' - Renderize TodoList')
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map(({ desc, id, done }, i) => {
                    return <TodoListItem 
                        id={ id } 
                        desc={ desc } 
                        index={ i } 
                        done={ done }
                        key={ id }
                        handleDelete={ handleDelete } 
                        handleToggle={ handleToggle } 
                    />
                })
            }
        </ul>
    )
})

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}

export default TodoList
