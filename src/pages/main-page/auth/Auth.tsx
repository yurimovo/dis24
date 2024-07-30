import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from "../../../firebase";

import { Button } from 'react-bootstrap';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUser } from "redux-store/slices/userSlice";

import "./style.scss";

const Auth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (event: React.FormEvent) => {
        event.preventDefault();
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            user?.getIdToken().then((token) => {
                dispatch(setUser({ email: user.email, uid: user.uid, idToken: token }));
                toast.success('Авторизация прошла успешно');
                navigate('/facilities');
            });
        }).catch((error) => {
            toast.error('Ошибка авторизации');
            setEmail('');
            setPassword('');
        })
    };

    return (
        <div className="auth">
            <form className="auth-form" /* onSubmit={handleSignIn} */>
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