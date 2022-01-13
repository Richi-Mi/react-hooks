import React, { useEffect, useState } from 'react'

const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0});
    useEffect(() => {
        // console.log('Elemento Montado');
        const mouseMove = ( ev ) => {
            const coords = { x: ev.x, y: ev.y }
            setCoords( coords );
        } 
        window.addEventListener('mousemove', mouseMove );

        return () => {
            // console.log('Comoponente Desmontado')
            window.removeEventListener('mousemove', mouseMove );
        }
    }, []);
    return (
        <div>
            <h3> Coordenadas Pa: </h3>
            <h4> X: { coords.x } </h4>
            <h4> Y: { coords.y } </h4>
        </div>
    )
}
export default Message