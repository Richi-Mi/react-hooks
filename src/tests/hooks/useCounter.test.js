import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../../hooks/useCounter';

describe(' * Pruebas en useCounter()', () => {
    const defaultCounter = 100;
    test(' - Debe de retornar los valores por defecto', () => {
        const { result } = renderHook( () => useCounter() );
        
        expect( result.current.counter ).toBe( 10 );
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');
    });
    
    test(' - Debe de tener el counter igual al valor por defecto', () => {
        const { result } = renderHook( () => useCounter( defaultCounter ) )
        
        expect( result.current.counter ).toBe( defaultCounter );
    });

    test(' - Debe de incrementar el counter en 1', () => {
        const { result } = renderHook( () => useCounter( defaultCounter ) );
        const { increment } = result.current;

        // act() .- Sirve para ejecutar funciones de los Hooks
        act( () => {
            increment( 1 );
        }); 
        const { counter } = result.current;

        expect( counter ).toBe( defaultCounter + 1 );
    });
    
    test(' - Debe de decrementar el counter en 1', () => {
        const { result } = renderHook( () => useCounter( defaultCounter ) );
        const { decrement } = result.current;

        act( () => {
            decrement( 1 );
        });

        const { counter } = result.current;
        expect( counter ).toBe( defaultCounter - 1 );
    });

    test(' - Debe de resetear el counter a su propiedad por default', () => {
        const { result } = renderHook( () => useCounter( defaultCounter ) );
        const { reset, increment } = result.current;

        act( () => {
            increment( 1 );
            reset();
        });

        const { counter } = result.current;
        expect( counter ).toBe( defaultCounter );
    })
    
    
})
