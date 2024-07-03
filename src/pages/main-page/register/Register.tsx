import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';

import { User } from '../../../types/users';

import { createUser } from '../../../service-functions/users/createUser';

import "./style.scss";


const Register = () => {
    const [isLoading, setLoading] = useState<boolean>(false);

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
        } = useForm<User>({
        mode: "onBlur",
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<User> = (data) => {
        setLoading(true);
        createUser({
            username: data.username,
            password: data.password
        })
        .then(() => {
            setLoading(false);
        })
        .catch(error => {console.error(error)});
    }

    return (
        <div className='register_container'>
            <form onSubmit={handleSubmit(onSubmit)} className='register_form'>
                <input
                className='register_form__textField'
                placeholder='Имя пользователя'
                {...register('username', {
                    required: 'Обязательное поле',
                })}
                />
                {
                <div style={{ height: 30 }}>
                    {errors?.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
                </div>
                }
                <input
                className='register_form__textField'
                placeholder='Пароль'
                {...register('password', {
                    required: 'Обязательное поле'
                })}
                />
                {
                <div style={{ height: 30 }}>
                    {errors?.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                </div>
                }
                <Button className='register_form_saveButton' type='submit' variant='success'>Зарегистрироваться</Button>
                <div className='register_form__footer'>
                    <div className='register_form__footer__text'>Уже есть аккаунт?</div><div className='register_form__footer__span'>Войти</div>
                </div>
            </form>
        </div>
    )
};

export default Register;