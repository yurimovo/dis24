import React from 'react';
import { Link } from "react-router-dom";

const MenuBar = () => {
    return (
        <nav className='container'>
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/facilities">Объекты</Link></li>
            </ul>
        </nav>
    );
};

export default MenuBar;