import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../../firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "redux-store/slices/userSlice";

import "./style.scss";

import SignInButton from '../../../assetts/sign_in.png';
import SignUpButton from '../../../assetts/sign_up.png';
import LogoutButton from '../../../assetts/logout.png';

const AuthButtons = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = getAuth(app);

    const handleSignOut = (e: React.MouseEvent) => {
        e.preventDefault();
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate('/');
        })
    };

    return (
        <div className='auth-buttons'>
            <img src={SignUpButton} alt='Sign up' style={{ marginRight: '10px' }} onClick={() => navigate('/register')} />
            <img src={SignInButton} alt='Sign in' style={{ marginRight: '10px' }} onClick={() => navigate('/auth')} />
            <img src={LogoutButton} alt='Logout' style={{ marginRight: '10px' }} onClick={handleSignOut} />
        </div>
    );
};

export default AuthButtons;