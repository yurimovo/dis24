import React from 'react';

import store from '../../../store';
import { observer } from 'mobx-react';

import "./style.scss";

import AvatarImage from "../../../assetts/avatar.png";
import AuthButtons from '../auth-buttons/AuthButtons';

const UserBar = observer(() => {
    const { currentUser } = store;

    return (
        <>
            <AuthButtons />
            <div className='userbar'>
                <div className='userName'>{currentUser}</div>
                <div className='userAvatar'><img src={AvatarImage} alt='User avatar' /></div>
            </div>
        </>
    );
});

export default UserBar;