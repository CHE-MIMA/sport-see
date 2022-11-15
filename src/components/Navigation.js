import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logoSport.png";
import "../styles/navigation.css"


const Navigation = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img className="logoimg" src={logo} alt="logo" />
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