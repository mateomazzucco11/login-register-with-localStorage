import React, { useState } from 'react'
import LeftSection from '../LeftSection/LeftSection'
import './LoginPage.css'

import { Link, useHistory } from 'react-router-dom'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { AiOutlineLock } from 'react-icons/ai'
import AceptMsg from '../../components/AceptMsg'
import ErrorMsg from '../../components/ErrorMsg'

export default function FourPage() {
    const history = useHistory();
    let email = localStorage.getItem('user')
    let password = localStorage.getItem('password')

    const [login, setLogin] = useState({
        email2: '',
        password2: ''
    })

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name] : e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (login.email2 === email & login.password2 == password){
            history.push('/home')
        }
        else {
            alert('Contraseña o usuario incorrecto')
        }
        e.target.reset()
    }

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
                        <h2>Login</h2>
                        <p>Ingresa tu cuenta</p>
                    </div>
                </div>
                <div className='midle-second-section'>
                    <div className='first-item'>
                        <h1>Ingresa tu cuenta</h1>
                        <p>Para poder continuar y hacer uso de la aplicación <br/> debes ingresar a tu cuenta</p>
                    </div>
                    <form className='form-item' onSubmit={handleLogin}>
                        <div className='item-one'>
                            <h2>Email</h2>
                            <input 
                                type='email' 
                                required 
                                name='email2'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='item-second'>
                            <h2>Contraseña</h2>
                            <input 
                                type='password' 
                                required
                                name='password2'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='register-item four'>
                            <input type='submit' value='Ingresar' />
                        </div>
                    </form>
                    
                </div>
                <p className='save-information four'>
                    <AiOutlineLock />
                    Tu información es segura
                </p>
            </div>
        </div>
    )
}
