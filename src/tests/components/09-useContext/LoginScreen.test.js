import { mount } from 'enzyme';
import React from 'react';
import LoginScreen from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe(' * Pruebas en el componente <LoginScreen />', () => {
    const user = {
        name: 'Richi!!',
        email: 'richi@gmail.com'
    }
    const setUser = jest.fn();
    const value = {
        user,
        setUser
    }
    // wrapper // mount
    const wrapper = mount(
        <UserContext.Provider value={ value }>
            <LoginScreen />
        </UserContext.Provider>
    )
    test(' - Debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });
    test(' - Debe de ejecutar el setUser() con el argumento esperado', () => {

        const btn_login = wrapper.find('.btn-primary');
        btn_login.simulate('click');

        expect( setUser ).toHaveBeenCalled();
        expect( setUser ).toHaveBeenCalledTimes(1);
        expect( setUser ).toHaveBeenCalledWith({
            id: expect.any( Number ),
            ...user
        });
    
    });
    
});
