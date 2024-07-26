import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { auth } from '../../../firebase';

import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { User } from "../../../types/users";

import store from "../../../store";

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
        <form onSubmit={handleSignIn}>
            <h1>Sign In</h1>
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
            <button type="submit">Sign In</button>
        </form>
    );
};

export default Auth;