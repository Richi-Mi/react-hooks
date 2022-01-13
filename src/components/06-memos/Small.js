import React, { memo } from 'react'

const Small = memo( ({ value }) => {
    console.log(' - Me volvi a llamar ', value );

    // memo se usa para evitar que un componente renderizado dentro de otro
    // se vuelva a llamar cuando un state cambie

    // con memo el componente solo se renderiza cuando las properties cambian
    return (
        <small> { value } </small>
    )
} );
export default Small
