import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../../redux-store/slices/userSlice';
import { AppDispatch } from '../../../redux-store';
import { toast } from 'react-toastify';

//import store from '../../../store';

import "./style.scss";


const Register = () => {
    const [formEmail, setFormEmail] = useState('');
    const [formPassword, setFormPassword] = useState('');

    //const { setAuthenticatedUser } = store;
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleSignUp = async (event: React.FormEvent) => {
        event.preventDefault();
        const auth = getAuth();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formEmail, formPassword);
            const user = userCredential.user;
            const idToken = await user.getIdToken();

            if (user.email) {
                dispatch(setUser({
                    email: user.email,
                    uid: user.uid,
                    idToken: idToken,
                }));
                navigate('/facilities');
            } else {
                toast.error('Email пустой');
            }
        } catch (error) {
            toast.error('Ошибка регистрации');
        }
        //setAuthenticatedUser(user.email, user.uid, user.scs)
    };

    return (
        <div className="register">
            <form className="register-form" onSubmit={handleSignUp}>
                <div className='register-form__title'>РЕГИСТРАЦИЯ</div>
                <input
                    className='register-form__input' 
                    type="email" 
                    value={formEmail} 
                    onChange={(e) => setFormEmail(e.target.value)} 
                    placeholder="Email" 
                />
                <input 
                    className='register-form__input'
                    type="password" 
                    value={formPassword} 
                    onChange={(e) => setFormPassword(e.target.value)} 
                    placeholder="Пароль" 
                />
                <Button className='register-form__button' variant='success' onClick={handleSignUp}>Зарегистрироваться</Button>
                <div className='register-form__already-registered'>У вас уже есть аккаунт? <a href='/auth' className='register-form__link'>Войти</a></div>
            </form>
        </div>
    );
};

export default Register;