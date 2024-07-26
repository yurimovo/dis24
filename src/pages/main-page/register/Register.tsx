import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import "./style.scss";


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (event: React.FormEvent) => {
        event.preventDefault();
        try {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("userCredential: ", userCredential);
            });
            alert('User registered successfully');
        } catch (error) {
            console.error("Error signing up: ", error);
        }
    };

    return (
        <div className="register">
            <form className="register-form" onSubmit={handleSignUp}>
                <div className='register-form__title'>РЕГИСТРАЦИЯ</div>
                <input
                    className='register-form__input' 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                />
                <input 
                    className='register-form__input'
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Пароль" 
                />
                <Button className='register-form__button' variant='success' onClick={handleSignUp}>Зарегистрироваться</Button>
                <div className='register-form__already-registered'>У вас уже есть аккаунт? <a href='/auth' className='register-form__link'>Войти</a></div>
            </form>
        </div>
    );
};

export default Register;