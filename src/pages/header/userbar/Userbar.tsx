import React from 'react';
import { observer } from 'mobx-react';
import { useAuth } from 'hooks/userAuth.hook';

import "./style.scss";

import AvatarImage from "../../../assetts/avatar.png";
import AuthButtons from '../auth-buttons/AuthButtons';

const UserBar = observer(() => {
    const { isAuth, userName } = useAuth();

    return (
        <>
            <AuthButtons />
            <div className='userbar'>
                <div className='userName'>{isAuth ? userName : 'Гость'}</div>
                <div className='userAvatar'><img src={AvatarImage} alt='User avatar' /></div>
            </div>
        </>
    );
});

export default UserBar;