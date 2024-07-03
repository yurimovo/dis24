import React from 'react';

import MenuBar from "./menu/Menu";
import Userbar from "./userbar/Userbar";

import "./style.scss";

const Header = () => {
    return (
        <div className='headerContainer'>
            <MenuBar />
            <Userbar />
        </div>
    )
}

export default Header;