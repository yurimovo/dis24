import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from './auth/Auth';
import Register from './register/Register';

import DisLogo from '../../assetts/dis_logo.png';

import "./style.scss";

const MainPage = () => {
    const [isRegister, setRegister] = useState<boolean>(true);

    const handleAuthSwitch = () => {
        setRegister(false);
    };

    const handleRegisterSwitch = () => {
        setRegister(true);
    };

    return (
        <div className='main_formContainer'>
            <img src={DisLogo} alt='Dislocation 2024' />
        </div>
    );
};

export default MainPage;