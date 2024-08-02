import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../../redux-store/slices/userSlice';
import { AppDispatch } from '../../../redux-store';
import { toast } from 'react-toastify';

import "./style.scss";


const Register = () => {
    const [formEmail, setFormEmail] = useState('');
    const [formUsername, setFormUsername] = useState('');
    const [formPassword, setFormPassword] = useState('');
    const [formIsAdmin, setFormIsAdmin] = useState(false);

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleSignUp = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formEmail, formPassword);
            const user = userCredential.user;
            const idToken = await user.getIdToken();

            await setDoc(doc(db, 'users', user.uid), {
                username: formUsername,
                email: user.email,
                isAdmin: formIsAdmin
            });

            if (user.email) {
                dispatch(setUser({
                    email: user.email,
                    uid: user.uid,
                    idToken: idToken,
                    userName: formUsername,
                    isAdmin: formIsAdmin
                }));
                navigate('/main');
            } else {
                toast.error('Email пустой');
            }
        } catch (error) {
            toast.error('Ошибка регистрации');
        }
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
                    type="username" 
                    value={formUsername} 
                    onChange={(e) => setFormUsername(e.target.value)} 
                    placeholder="Отображаемое имя" 
                />
                <input 
                    className='register-form__input'
                    type="password" 
                    value={formPassword} 
                    onChange={(e) => setFormPassword(e.target.value)} 
                    placeholder="Пароль" 
                />
                <div className="form-check" style={{ marginBottom: '10px' }}>
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value=""
                        checked={formIsAdmin}
                        onChange={(e) => setFormIsAdmin(e.target.checked)}
                        id="isAdminCheckbox" 
                    />
                    <label className="form-check-label" htmlFor="isAdminCheckbox">
                        Является администратором
                    </label>
                </div>
                <Button className='register-form__button' variant='success' onClick={handleSignUp}>Зарегистрироваться</Button>
                <div className='register-form__already-registered'>У вас уже есть аккаунт? <a href='/auth' className='register-form__link'>Войти</a></div>
            </form>
        </div>
    );
};

export default Register;