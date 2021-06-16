import React, { useState } from 'react'
import LeftSection from '../LeftSection/LeftSection'
import './RegisterAboutPage.css'

import { Link, useHistory } from 'react-router-dom'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { AiOutlineLock } from 'react-icons/ai'
import PhoneInput from 'react-phone-number-input'

export default function ThreePage() {
    const [value, setValue] = useState();
    const history = useHistory();

    const [validate, setValidate] = useState({
        number:'',
        direction:'',
        country:''
    })

    const handleSaveAbout = (e) => {
        setValidate({
            ...validate,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('about',validate.number + validate.direction + validate.country)
        e.target.reset()
        history.push('/login')
    }

    return (
        <div className='container-three-section'>
            <LeftSection />
            <div className='right-section'>
                <div className='top-second-section'>
                    <Link to='/register' className='return-home'>
                        <MdKeyboardArrowLeft />
                        <p className='return'>Volver</p>
                    </Link>
                    <div className='info-page'>
                        <h2>PASO 02/02</h2>
                        <p>Localización</p>
                    </div>
                </div>
                <div className='midle-second-section'>
                    <div className='first-item'>
                        <h1>Completar tu perfil!</h1>
                        <p>Para poder revisar que se trata de una cuenta<br/>real, necesitamos la siguiente información</p>
                    </div>
                    <form className='form-item' onSubmit={handleSubmit}>
                        <div className='item-one'>
                            
                            <h2>Número de teléfono</h2>
                            <PhoneInput
                                name='number'
                                international
                                countryCallingCodeEditable={false}
                                defaultCountry="AR"
                                value={value}
                                onChange={setValue}
                                required='required'
                            />
                        </div>
                        <div className='item-second'>
                            <h2>Dirección*</h2>
                            <input 
                                name='direction'
                                type='direction' 
                                required
                                onChange={handleSaveAbout}
                            />
                        </div>
                        <div className='item-three'>
                            <h2>País de residencia*</h2>
                            <input 
                                name='country'
                                type='country' 
                                required
                                onChange={handleSaveAbout}
                            />
                        </div>
                        <div className='register-item three'>
                            <input type='submit' value='Guardar y crear cuenta'/>
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
