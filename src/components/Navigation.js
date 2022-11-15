import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src="" alt="" />
            </div>
            <ul className='navigation'>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/">
                    <li>Profil</li>
                </NavLink>
                <NavLink to="/">
                    <li>Réglage</li>
                </NavLink>
                <NavLink to="/">
                    <li>Communauté</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;