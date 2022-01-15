const initialState = [
    {
        id: 1,
        todo: 'Comprar Pan',
        done: false
    },
    {
        id: 2,
        todo: 'Leer la Biblia',
        done: true
    }
];
// un pequeño ejemplo usando una función simple

// Los reducers son solo función que reciben un state una accion.
// Siempre regresan un nuevo state y no son asincronos
const todoReducer = ( state = initialState, action ) => {

    if( action?.type === 'agregar' ) {
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

const newToodo =  {
    id: 3,
    todo: 'Leer la Padre Rico',
    done: true
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newToodo
}

todos = todoReducer( initialState, agregarTodoAction );

console.log( todos )