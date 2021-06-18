import './RegisterPage.css'
import LeftSection from '../LeftSection/LeftSection'
import ErrorMsg from '../../components/ErrorMsg';

import { Link, useHistory }from 'react-router-dom';
import React, { Fragment, useState } from 'react'

import { MdKeyboardArrowLeft } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'

const SecondPage = () => {
    
    const history = useHistory();
    const [ error, setError] = useState(false)
    const [ validate, setValidate ] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        setValidate({
            ...validate,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', validate.email)
        localStorage.setItem('password', validate.password)
        localStorage.setItem('name', validate.name)
        e.target.reset();
        setError(false)
        history.push('/aboutregister')
    }

    return (
        <Fragment>
            <div className='container-second-page'>
                <LeftSection />
                {/* <div className='oasis'>
                    <p class='oasis-text'>Oasis.</p>
                </div> */}
                <div className='right-section'>
                    <div className='top-second-section'>
                        <Link to='/' className='return-home'>
                            <MdKeyboardArrowLeft />
                            <p className='return'>Volver</p>
                        </Link>
                        <div className='info-page'>
                            <h2>PASO 01/02</h2>
                            <p>Personal Info.</p>
                        </div>
                    </div>
                    <div className='midle-second-section'>
                        <div className='first-item'>
                            <h1>Registra tu cuenta individual</h1>
                            <p>Para poder revisar que se trata de una cuenta<br/>real, necesitamos la siguiente información</p>
                        </div>
                        <form className='form-item' onSubmit={handleSubmit}>
                            <div className='item-one'>
                                <h2>Nombre completo*</h2>
                                <input 
                                    type='name' 
                                    placeholder='Ingrese su nombre' 
                                    id='container-item-one' 
                                    name='name'
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className='item-second'>
                                <h2>Correo electrónico*</h2>
                                <input 
                                    type='email' 
                                    placeholder='Ingrese su correo' 
                                    id='container-item-two'
                                    name='email'
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className='item-three'>
                                <h2>Ingrese su contraseña*</h2>
                                <input 
                                    type='password' 
                                    placeholder='Ingrese su contraseña' 
                                    id='container-item-three' 
                                    name='password'
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className='check-item'>
                                <input type='checkbox' className='checkone' required />
                                <p>Acepto los términos y condiciones</p>
                            </div>
                            <div className='register-item'>
                                <input type='submit' value='Registrar cuenta' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SecondPage;
