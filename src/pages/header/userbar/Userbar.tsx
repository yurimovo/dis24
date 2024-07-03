import React from 'react';

import store from '../../../store';
import { observer } from 'mobx-react';

import "./style.scss";

import AvatarImage from "../../../assetts/avatar.png";

const UserBar = observer(() => {
    const { currentUser } = store;

    return (
        <div className='userbar'>
            <div className='userName'>{currentUser}</div>
            <div className='userAvatar'><img src={AvatarImage} alt='User avatar' /></div>
        </div>
    );
});

export default UserBar;