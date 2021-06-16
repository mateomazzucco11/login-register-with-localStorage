import React from 'react'
import './ErrorMsg.css'


export default function ErrorMsg() {
    return (
        <div className='error-message'>
            <div className='container-error'>
                <h1>¡Ups, algo ha ido mal!</h1>
                <p>Parece que el correo electrónico introducido ya está en uso. Por favor, revísalo y <br/>vuelve a intentarlo de nuevo.</p>
                <a >
                    Cerrar
                </a>
            </div>
        </div>
    )
}
