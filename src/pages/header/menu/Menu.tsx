import React from 'react';
import { Link } from "react-router-dom";

import "./style.scss";

const MenuBar = () => {
    return (
        <nav className='container'>
            <ul className='menuContainer'>
                <li>
                    <a href='#'><Link to="/">Главная</Link></a>
                </li>
                <li>
                    <a href='#'><Link to="/organizations">Организации</Link></a>
                </li>
                <li>
                    <a href='#'><Link to="/owners">Собственники</Link></a>
                </li>
                <li>
                    <a href='#'><Link to="/facilities">Объекты</Link></a>
                </li>
                <li>
                    <a href='#'><Link to="/apartments">МХИГ</Link></a>
                </li>
            </ul>
        </nav>
    );
};

export default MenuBar;