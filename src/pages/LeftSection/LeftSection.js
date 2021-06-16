import React from 'react'
import './LeftSection.css'

import background from '../../assets/Background.png'
import vector from '../../assets/Vector1.png'

export default function LeftSection() {
    return (
        <div className='left-section'>
            <div className='background'>
                <img src={background} />
            </div>
            <div className='text'>
                <p>Nuwe es la platforma que convierte el desarrollo profesional, la búsquda de trabajo y la conexiones<br/>de personas y empresas en un juego. Haciendo<br/>que puedas centrarte en lo que te gusta,<br/>programar, diseñar, crear, planear...</p>
                <img className='vector'  src={vector} />
            </div>
        </div>
    )
}
