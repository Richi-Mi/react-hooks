import React from 'react';
import { shallow } from "enzyme"
import HookApp from "../HookApp"

describe(' * Pruebas en <HookApp />', () => {
    
    const wrapper = shallow( <HookApp />)
    
    test(' - Debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

})
