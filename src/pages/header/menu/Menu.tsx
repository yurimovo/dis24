import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from 'hooks/userAuth.hook';

import "./style.scss";

const MenuBar = () => {
    const { isAdmin } = useAuth();

    return (
        <nav className='container'>
            <ul className='menuContainer'>
                <li>
                    <a href='#'><Link to="/">Главная</Link></a>
                </li>
                {/* <li>
                    <a href='#'><Link to="/organizations">Организации</Link></a>
                </li>
                <li>
                    <a href='#'><Link to="/owners">Собственники</Link></a>
                </li> */}
                <li>
                    <a href='#'><Link to="/facilities">Объекты</Link></a>
                </li>
                <li>
                    <a href='#'><Link to="/apartments">МХИГ</Link></a>
                </li>
                <li>
                    <a href="#"><Link to="/simcards">SIM-карты</Link></a>
                </li>
                <li>
                    <a href="#"><Link to="/alarms">Ложняки</Link></a>
                </li>
                {isAdmin && <li>
                    <a href="#"><Link to="/settings">Настройки</Link></a>
                </li>}
            </ul>
        </nav>
    );
};

export default MenuBar;