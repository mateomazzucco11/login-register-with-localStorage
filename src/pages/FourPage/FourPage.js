import React from 'react'
import LeftSection from '../LeftSection/LeftSection'
import './FourPage.css'

import { Link } from 'react-router-dom'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { AiOutlineLock } from 'react-icons/ai'
import AceptMsg from '../../components/AceptMsg'

export default function FourPage() {
    return (
        <div className='container-four-section'>
            <LeftSection />
            <div className='right-section'>
                <div className='top-second-section'>
                    <Link to='/' className='return-home'>
                        <MdKeyboardArrowLeft />
                        <p className='return'>Volver</p>
                    </Link>
                    <div className='info-page four'>
                        <h2>PASO 03/03</h2>
                        <p>Verificación por tarjeta</p>
                    </div>
                </div>
                <div className='midle-second-section'>
                    <div className='first-item'>
                        <h1>Verifica tu perfil</h1>
                        <p>Para poder revisar que se trata de una cuenta<br/>real, necesitamos la siguiente información</p>
                    </div>
                    <form className='form-item'>
                        <div className='item-one'>
                            <h2>Número de tarjeta</h2>
                            <input type='text' required />
                        </div>
                        <div className='item-second'>
                            <h2>Código secreto</h2>
                            <input type='email' required/>
                        </div>
                    </form>
                    <div className='register-item four'>
                        <Link to='/home'>
                            Crear cuenta
                        </Link>
                    </div>
                </div>
                <p className='save-information four'>
                    <AiOutlineLock />
                    Tu información es segura
                </p>
            </div>
            <AceptMsg />
        </div>
    )
}
