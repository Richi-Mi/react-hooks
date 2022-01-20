import { shallow } from 'enzyme';
import React from 'react';
import TodoList from '../../../components/08-useReducer/TodoList';
import demoTodos from '../../fixtures/demoTodos';

describe(' * Pruebas en <TodoList />', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( 
        <TodoList 
            todos = { demoTodos } 
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
        /> 
    );
    test(' - Debe de Mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    test(' - Debe de tener 2 elementos <TodoListItem />', () => {
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length )    
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any( Function ) );    
    })
    
})
