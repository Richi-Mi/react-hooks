import React, { useEffect } from 'react'

const Message = () => {
    useEffect(() => {
        console.log(' Componente Montado');
        return () => {
            console.log('Comoponente Desmontado')
        }
    }, []);
    return (
        <div>
            <h3> Eres genial </h3>
        </div>
    )
}
export default Message