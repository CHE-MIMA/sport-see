import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logoSport.png";
import "../styles/navigation.css"


const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img className="logoimg" src={logo} alt="logo" />
            </div>
            <ul className='navigation'>
                <Link to="/">
                    <li>Accueil</li>
                </Link>
                <Link to="/">
                    <li>Profil</li>
                </Link>
                <Link to="/">
                    <li>Réglage</li>
                </Link>
                <Link to="/">
                    <li>Communauté</li>
                </Link>
            </ul>
        </div>
    );
};

export default Header;