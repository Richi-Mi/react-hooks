import procesoPesado from "../../helpers/procesoPesado"

describe(' * Pruebas sobre el helper proceso Pesado', () => {
    test(' - Debe de retornar las iteraciones y el texto correctamente', () => {
        const iteraciones = 10;
        const result = procesoPesado( iteraciones );

        expect( result ).toBe( `${ iteraciones } iteraciones realizadas` );
    })
    
})
