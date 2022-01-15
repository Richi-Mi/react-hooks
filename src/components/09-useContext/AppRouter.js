import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import AboutScreen from './AboutScreen';
import E404Element from './E404Element';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import NavBar from './NavBar';
/**
 * <Router /> .- Solo sirve para definir que esta parte va a ser un Router.
 * <Routes> .- Aqui meteremos todas las Rutas de nuestra SPA 
 * <Route> .- Definimos una nueva ruta de nuestra App. 
 */

const AppRouter = () => {
    return (
        <Router>
            <div >
                <NavBar />
                {/**<Routes></Routes> Nos ayuda a mostrar rutas */}
                <Routes>
                    <Route path="/" element={<HomeScreen />} />

                    <Route path="/about" element={<AboutScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                    
                    <Route path="*" element={<E404Element />}/>

                </Routes>

            </div>
        </Router>
    )
}

export default AppRouter
