import React from 'react';

import MenuBar from "./menu/Menu";
import Userbar from "./userbar/Userbar";

const Header = () => {
    return (
        <div>
            <MenuBar />
            <Userbar />
        </div>
    )
}

export default Header;