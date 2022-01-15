import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ id, desc, index, done, handleDelete, handleToggle }) => {
    return (
        <li 
            key={id}
            className='list-group-item'
        >
            <p 
                onClick={() => handleToggle(id)} 
                className={`${done && 'complete'}`}
            > 
                {index + 1}. - {desc}  
            </p>

            <button 
                className='btn btn-danger' 
                onClick={() => handleDelete(id)}
            >
                Borrar 
            </button>
        </li>
    )
}
TodoListItem.propTypes = {
    id: PropTypes.number.isRequired,
    desc: PropTypes.string, 
    done: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired, 
    handleDelete: PropTypes.func.isRequired, 
    handleToggle: PropTypes.func.isRequired
}

export default TodoListItem
