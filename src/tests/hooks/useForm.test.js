import { act, renderHook } from "@testing-library/react-hooks";
import useForm from "../../hooks/useForm";

describe(' * Pruebas en hook - useForm', () => {
    const initialForm = {
        name: 'ricardo',
        email: 'mjoseanakin@gmail.com'
    }
    test(' - Debe de regresar un formulario por defecto', () => {
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ values, handleInputChange, reset ] = result.current;
         
        expect( values ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');

    });
    test(' - Debe de cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange ] = result.current;
        const change = {
            target: {
                name: 'name',
                value: 'José Ricardo'
            }
        }

        act( () => {
            handleInputChange( change );
        });
        const [ values ] = result.current;
        expect( values ).toEqual({ ...initialForm, name: 'José Ricardo' });
    });    
    test(' - Debe re-establecer el formulario con RESET', () => {
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange, reset ] = result.current;
        const change = {
            target: {
                name: 'name',
                value: 'José Ricardo'
            }
        }

        act( () => {
            handleInputChange( change );
            reset();
        });
        const [ values ] = result.current;
        expect( values ).toEqual( initialForm );
    });
    
});
