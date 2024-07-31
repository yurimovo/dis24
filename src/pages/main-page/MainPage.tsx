import React, { useEffect } from 'react';
import DisLogo from '../../assetts/dis_logo.png';
import { useAuth } from 'hooks/userAuth.hook';
import { useNavigate } from 'react-router-dom';

import "./style.scss";

const MainPage = () => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate('/auth');
        }
    }, [isAuth, navigate]);

    return isAuth ? (
        <div className='main_formContainer'>
            <img src={DisLogo} alt='Dislocation 2024' />
        </div>
    ) : (
        null
    );
};

export default MainPage;