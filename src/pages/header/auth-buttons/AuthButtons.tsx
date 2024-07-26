import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

import SignInButton from '../../../assetts/sign_in.png';
import SignUpButton from '../../../assetts/sign_up.png';
import LogoutButton from '../../../assetts/logout.png';

const AuthButtons = () => {
    const navigate = useNavigate();

    return (
        <div className='auth-buttons'>
            <img src={SignUpButton} alt='Sign up' style={{ marginRight: '10px' }} onClick={() => navigate('/register')} />
            <img src={SignInButton} alt='Sign in' style={{ marginRight: '10px' }} onClick={() => navigate('/auth')} />
            <img src={LogoutButton} alt='Logout' style={{ marginRight: '10px' }} onClick={() => navigate('/')} />
        </div>
    );
};

export default AuthButtons;