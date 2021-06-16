import React from 'react'
import './AceptMsg.css'

export default function AceptMsg() {
    return (
        <div className='acept-message'>
            <div className='container-acept'>
                <h1>¡Todo guay!</h1>
                <p>Tu cuenta se ha creado correctamente</p>
                <div>
                    <a >
                        Cerrar
                    </a>
                    <a className='go-nuwe'>
                        Vamos para Nuwe
                    </a>
                </div>
            </div>
        </div>
    )
}
