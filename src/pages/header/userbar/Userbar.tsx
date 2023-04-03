import React from 'react';

import "./style.scss";

import AvatarImage from "../../../assetts/avatar.png";

const UserBar = () => {
    return (
        <div className='userbar'>
            <div className='userName'>User name</div>
            <div className='userAvatar'><img src={AvatarImage} /></div>
        </div>
    );
};

export default UserBar;