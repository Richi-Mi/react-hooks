import todoReducer from "../../../components/08-useReducer/todoReducer"
import demoTodos from "../../fixtures/demoTodos";

describe(' * Pruebas en el todoReducer()', () => {
    test(' - Debe de retornar el estado por defecto', () => {

        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);

    })
    test(' - Debe de agregar un Todo ', () => {
        const newTodo = {
            id: 4,
            desc: 'Aprender Node',
            done: true
        }

        const action = {
            type: 'add',
            payload: newTodo
        }
        const state = todoReducer(demoTodos, action);
        expect( state.length ).toBe( demoTodos.length + 1 );
        expect( state ).toEqual([ ...demoTodos, newTodo ]);
    })
    test(' - Debe de eliminar un TODO ', () => {

        const action = {
            type: 'delete',
            payload: 2
        }
        const state = todoReducer( demoTodos, action );
        expect( state.length ).toBe( demoTodos.length - 1 );
        expect( state ).not.toEqual( demoTodos );
         
    })
    test(' - Se debe hacer el toggle correctamente', () => {

        const action = {
            type: 'toggle',
            payload: 1
        }
        const state = todoReducer( demoTodos, action );
        const task = state.find( ( todo ) => todo.id === action.payload );

        expect( state.length ).toBe( demoTodos.length );
        expect( task.done ).toBe( true )
    })

})
