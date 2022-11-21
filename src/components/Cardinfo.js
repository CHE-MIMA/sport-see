import React from 'react';

import iconCalorie from '../assets/calories-icon.png';
import iconCarbs from '../assets/carbs-icon.png';
import iconFat from '../assets/fat-icon.png';
import iconProtein from '../assets/protein-icon.png';
import '../styles/cardinfo.css'

const Cardinfo = ({ calories, proteins, glucides, lipides }) => {
    return (
        <div className="info-card">
            <div className="divInfo">
                <img className='imgInfo' src={iconCalorie} alt="" />
                <div className='flex-card'>
                    <h1 className='titre-info'>{calories} kCal</h1>
                    <span>Calories</span>
                </div>
            </div>
            <div className="divInfo">
                <img className='imgInfo' src={iconProtein} alt="" />
                <div className='flex-card'>
                    <h1 className='titre-info'>{proteins} g</h1>
                    <span>Proteines</span>
                </div>
            </div>
            <div className="divInfo">
                <img className='imgInfo' src={iconCarbs} alt="" />
                <div className='flex-card'>
                    <h1 className='titre-info'>{glucides} g</h1>
                    <span>Glucides</span>
                </div>
            </div>
            <div className="divInfo">
                <img className='imgInfo' src={iconFat} alt="" />
                <div className='flex-card'>
                    <h1 className='titre-info'>{lipides} g</h1>
                    <span>Lipides</span>
                </div>
            </div>
        </div>
    );
};

export default Cardinfo;