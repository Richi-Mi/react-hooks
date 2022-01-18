import { shallow } from "enzyme"
import RealExampleRef from "../../components/04-useRef/RealExampleRef"

describe(' * Pruebas en el Componente <RealExampleRef /> ', () => {
    const wrapper = shallow( <RealExampleRef /> );
    test(' - Debe de Mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( false );
        
    });
    test(' - Debe de Mostrar el componente <MultipleCustomHooks />', () => {

        const btn_show = wrapper.find('button');
        btn_show.simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( true );
    
    });
});
