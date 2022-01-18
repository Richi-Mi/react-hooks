import React from 'react';
import { shallow } from "enzyme";
import MultipleCustomHooks from "../../components/03-examples/MultipleCustomHooks";
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe(' * Pruebas en el componente <MultipleCustomHooks /> ', () => {

    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10
        });
    })

    test(' - Debe de mostrar el componente correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );
        expect( wrapper ).toMatchSnapshot();
        
    });
    test(' - Debe de mostrar la información cuando ya se tiene algo', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Alguien',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });
        const wrapper = shallow( <MultipleCustomHooks /> );
        // console.log( wrapper.html() )
        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-3').text().trim() ).toBe('Hola Mundo');
        expect( wrapper.find('footer').text().trim() ).toBe('Alguien');

    })
    
});
