import { shallow } from 'enzyme';
import React from 'react';
import TodoAdd from '../../../components/08-useReducer/TodoAdd';

describe(' * Pruebas sobre el Componente <TodoAdd /> ', () => {

    const handleAddTodo = jest.fn();
    const wraper = shallow( <TodoAdd handleAddTodo = { handleAddTodo } /> );

    test(' - Debe de mostrar el componente correctamente', () => {

        expect( wraper ).toMatchSnapshot(); 
    
    })
    test(' - No debe de llamar handleAddTodo() si no hay argumentos', () => {
    
        const formSubmit = wraper.find('form').prop('onSubmit');
        formSubmit({ preventDefault: () => {} });

        // expect( handleAddTodo ).not.toHaveBeenCalled();
        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
    
    }) 
    test(' - Debe de llamar handleAddTodo() con argumentos', () => {
    
        const value = 'Aprender MongoDB';
        const formSubmit = wraper.find('form').prop('onSubmit');
        wraper.find('input').simulate('change', {
            target: {
                name: 'description',
                value
            }
        });
        console.log( wraper.find('input').prop('value') )
        formSubmit({ preventDefault: () => {} }, value);

        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any( Object ) );
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any( Number ),
            desc: value,
            done: false
        });

        expect( wraper.find('input').prop('value') ).toBe('');
    });
});
