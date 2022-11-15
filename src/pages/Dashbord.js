import React from 'react';
import Navigation from '../components/Navigation';
import copiryght from '../assets/Copiryght.png';
import iconYoga from '../assets/iconYoga.png';
import iconNatation from '../assets/iconNatation.png';
import iconVelo from '../assets/iconVelo.png';
import iconPoids from '../assets/iconPoids.png';
import "../styles/dashbord.css";
const Dashbord = () => {
    return (
        <div>
            <Navigation />
            <div className='copiryght'>
                <img className='icon' src={iconYoga} alt="yoga" />
                <img className='icon' src={iconNatation} alt="natation" />
                <img className='icon' src={iconVelo} alt="velo" />
                <img className='icon' src={iconPoids} alt="poids" />
                <img className='imgCopiryght'
                    src={copiryght} alt="copiryght" />
            </div>
        </div>
    );
};

export default Dashbord;