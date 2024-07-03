import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import Auth from './auth/Auth';
import Register from './register/Register';

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
            <div className='main_formBody'>
                <div className='main_titleRow'>
                    Регистрация
                </div>
                <div className='form_formContent'>
                    {/* {isRegister ? <Register /> : <Auth />} */}
                    <Auth />
                </div>
            </div>
        </div>
    );
};

export default MainPage;