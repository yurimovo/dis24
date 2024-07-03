import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { User } from "../../../types/users";

import store from "../../../store";

import "./style.scss";

const Auth = () => {
    const { changeCurrentUser } = store;
    const navigate = useNavigate();

    const [user, setUser] = useState<string>('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    };

    const handleSubmit = () => {
        changeCurrentUser(user);
        navigate('/facilities');
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className='login-form'>
                <input
                    className='login-form__textField'
                    placeholder='Имя пользователя'
                    onChange={handleUsernameChange}    
                />
                <Button className='login-form__loginButton' type='submit' variant='success'>Войти</Button>
            </form>
        </div>
    )
};

export default Auth;