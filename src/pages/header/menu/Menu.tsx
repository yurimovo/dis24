import React from 'react';
import { Link } from "react-router-dom";

import "./style.scss";

const MenuBar = () => {
    return (
        <nav className='container'>
            <ul>
                <a href="#"><Link to="/">Главная</Link></a>
                <a href="#"><Link to="/facilities">Объекты</Link></a>
            </ul>
        </nav>
    );
};

export default MenuBar;