import { mount, shallow } from 'enzyme';
import React from 'react';
import HomeScreen from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe(' * Pruebas en el componente <HomeScreen />', () => {
    test(' - Debe de mostrarse correctamente', () => {

        const user = {
            name: 'Richi!!',
            email: 'richi@gmail.com'
        }

        // Shallow solo hace una renderizacion del componente principal
        // mount renderiza todo
        const wrapper = mount( 
            <UserContext.Provider value={{
                user
            }}>
                <HomeScreen /> 
            </UserContext.Provider>
        );
        expect( wrapper ).toMatchSnapshot();
    
    });
    
});
