import React, { useState } from "react";
import { auth } from '../../../firebase';

import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import "./style.scss";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            alert('User signed in successfully');
        } catch (error) {
            console.error("Error signing in: ", error);
        }
    };

    return (
        <div className="auth">
            <form className="auth-form" onSubmit={handleSignIn}>
                <div className='auth-form__title'>АВТОРИЗАЦИЯ</div>
                <input 
                    className='auth-form__input'
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                />
                <input 
                    className='auth-form__input'
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Пароль" 
                />
                <Button className='auth-form__button' variant='success' onClick={handleSignIn}>Войти</Button>
                <div className='auth-form__not-registered'>У вас нет аккаунта? <a href='/register' className='auth-form__link'>Создать</a></div>
            </form>
        </div>
        
    );
};

export default Auth;