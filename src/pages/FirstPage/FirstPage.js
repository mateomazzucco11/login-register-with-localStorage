import React from 'react';
import './FirstPage.css';

import polygon1 from '../../assets/Polygon1.png'
import polygon2 from '../../assets/Polygon2.png'

import { MdBusinessCenter } from 'react-icons/md'
import { BiUser } from 'react-icons/bi';
import LeftSection from '../LeftSection/LeftSection';

import {
    Link
} from 'react-router-dom'

export default function FirstPage() {
    return (
        <div className='container-first-page'>
            <LeftSection />
            <div className='right-section'>
                <div className='top-section'>
                    <p>Ya tienes cuenta?<Link to='/login'>Inicia sesión</Link></p>
                </div>
                <h1>¡Únete a la comunidad!</h1>
                <p className='text-title'>Para empezar, dinos que cuenta te gustaria <br/>abrir.</p>
                <div className='buttons'>
                    <Link to='/register' className='button-developer'>
                        <div className='icon-developer'>
                            <img src={polygon1}/>
                            <BiUser />
                        </div>
                        <h2>Developers</h2>
                        <p >Cuenta personas para entrar en el<br />mundo dev</p>
                        <div className='arrow'></div>
                    </Link>
                    <Link to='/register' className='button-business'>
                        <div className='icon-business'>
                            <img className='polygon-business' src={polygon2} />
                            <MdBusinessCenter />
                        </div>
                        <h2>Business</h2>
                        <p>Tienes o perteneces a una <br/>compañía</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
