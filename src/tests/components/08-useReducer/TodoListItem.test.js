import { shallow } from "enzyme";
import TodoListItem from '../../../components/08-useReducer/TodoListItem';

describe(' - Pruebas en el componente <TodoListItem />', () => {
    const funcionDelete = jest.fn();
    const funcionToggle = jest.fn();
    const text_show = "Aprender a Testear";
    const id = 12234567891;
    const index = 0;
    let wrapper;

    beforeEach(() => {

        wrapper = shallow(
            <TodoListItem
                id={id}
                desc={text_show}
                index={index}
                done={false}
                handleDelete={funcionDelete}
                handleToggle={funcionToggle}
            />
        )
    })

    test(' - Debe de Mostrarse correctamente ', () => {

        expect( wrapper ).toMatchSnapshot()

    })
    test(' - Debe de llamar la función borrar ', () => {
        const btn_delete = wrapper.find('.btn');
        btn_delete.simulate('click')

        expect( funcionDelete ).toHaveBeenCalled();
        expect( funcionDelete ).toHaveBeenCalledTimes( 1 );
        // expect( funcionDelete ).toHaveBeenCalledWith( expect.any( Number ) );
        expect( funcionDelete ).toHaveBeenCalledWith( id );
    })
    test(' - Debe de llamar la función toggle ', () => {
        const p_text = wrapper.find('p');
        p_text.simulate('click');

        expect( funcionToggle ).toHaveBeenCalled();
        expect( funcionToggle ).toHaveBeenCalledTimes( 1 );
        expect( funcionToggle ).toHaveBeenCalledWith( id )
    })
    test(' - Debe de Mostrar el texto correctamente', () => {
        const p_text = wrapper.find('p');
        
        expect( p_text.text().trim() ).toBe(`${ index + 1 }. - ${text_show}`) 
    })
    test(' - Debe de tener la clase complete si el TODO.done es true', () => {
        const wrapper_done = shallow(
            <TodoListItem
                id={id}
                desc={text_show}
                index={index}
                done={true}
                handleDelete={funcionDelete}
                handleToggle={funcionToggle}
            />
        )
        const p_text = wrapper_done.find('p');
        expect( p_text.hasClass('complete') ).toBe( true );
    })
})
