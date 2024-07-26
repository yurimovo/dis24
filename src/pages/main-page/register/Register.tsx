import React, { useState } from 'react';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';

import { User } from '../../../types/users';

import { createUser } from '../../../service-functions/users/createUser';

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
        <form onSubmit={handleSignUp}>
            <h1>Sign Up</h1>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
            />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Register;