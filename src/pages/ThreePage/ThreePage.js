import React from 'react'
import LeftSection from '../LeftSection/LeftSection'
import './ThreePage.css'

import { Link } from 'react-router-dom'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { AiOutlineLock } from 'react-icons/ai'

export default function ThreePage() {
    return (
        <div className='container-three-section'>
            <LeftSection />
            <div className='right-section'>
                <div className='top-second-section'>
                    <Link to='/' className='return-home'>
                        <MdKeyboardArrowLeft />
                        <p className='return'>Volver</p>
                    </Link>
                    <div className='info-page'>
                        <h2>PASO 02/03</h2>
                        <p>Localización</p>
                    </div>
                </div>
                <div className='midle-second-section'>
                    <div className='first-item'>
                        <h1>Completar tu perfil!</h1>
                        <p>Para poder revisar que se trata de una cuenta<br/>real, necesitamos la siguiente información</p>
                    </div>
                    <form className='form-item'>
                        <div className='item-one'>
                            <h2>Número de teléfono</h2>
                            <input type='number' required />
                        </div>
                        <div className='item-second'>
                            <h2>Dirección</h2>
                            <input type='' required/>
                        </div>
                        <div className='item-three'>
                            <h2>País de residencia</h2>
                            <input type='' required/>
                        </div>
                        <div className='register-item three'>
                            <input type='submit' value='Guardar y continuar'/>
                        </div>
                    </form>
                </div>
                <p className='save-information'>
                    <AiOutlineLock />
                    Tu información es segura
                </p>
            </div>
        </div>
    )
}
