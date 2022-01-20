import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import TodoApp from '../../../components/08-useReducer/TodoApp';
import demoTodos from '../../fixtures/demoTodos';

describe(' * Pruebas en el componente <TodoApp />', () => {
    
    Storage.prototype.setItem = jest.fn( () => {} )
    test(' - Debe mostrar el componente correctamente', () => {
        
        const wrapper = shallow( <TodoApp /> );
        expect( wrapper ).toMatchSnapshot();
        
    });
    test(' - Debe de agregar un TODO', () => {
        const wrapperMount = mount( <TodoApp /> ) // Similar al shallow pero con mas caracteristicas especiales
        const addTodo = wrapperMount.find('TodoAdd').prop('handleAddTodo')
        
        act( () => {
            addTodo( demoTodos[0] )
            addTodo( demoTodos[1] )
        })

        expect( wrapperMount.find('h1').text().trim() ).toBe(`TodoApp (${2})`);
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
    });
    /** Prueba que no funciona, Error desconocido */
    
    // test(' - Debe de eliminar un TODO', () => {
    //     const wrapper = shallow( <TodoApp /> );
        
    //     wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
    //     wrapper.find('TodoList').prop('handleDelete')( demoTodos[0] );
        
    //     expect( wrapper.find('h1').text().trim() ).toBe(`TodoApp (${0})`);
    // });
    
});
