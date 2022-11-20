import React from 'react';
import copiryght from '../assets/Copiryght.png';
import iconYoga from '../assets/iconYoga.png';
import iconNatation from '../assets/iconNatation.png';
import iconVelo from '../assets/iconVelo.png';
import iconPoids from '../assets/iconPoids.png';
import "../styles/navertical.css";
const Navertical = () => {
    return (

        <div className='footer'>
            <img className='icon' src={iconYoga} alt="yoga" />
            <img className='icon' src={iconNatation} alt="natation" />
            <img className='icon' src={iconVelo} alt="velo" />
            <img className='icon' src={iconPoids} alt="poids" />
            <img className='imgCopiryght'
                src={copiryght} alt="copiryght" />
        </div>

    );
};

export default Navertical;