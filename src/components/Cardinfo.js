import React from 'react';

import iconCalorie from '../assets/calories-icon.png';
import iconCarbs from '../assets/carbs-icon.png';
import iconFat from '../assets/fat-icon.png';
import iconProtein from '../assets/protein-icon.png';
import '../styles/cardinfo.css'

const Cardinfo = () => {
    return (
        <div className="info-card">
            <div className="divInfo">
                <img className='imgInfo' src={iconCalorie} alt="" />
                <span>Calories</span>
            </div>
            <div className="divInfo">
                <img className='imgInfo' src={iconProtein} alt="" />
                <span>Proteines</span>
            </div>
            <div className="divInfo">
                <img className='imgInfo' src={iconCarbs} alt="" />
                <span>Glucides</span>
            </div>
            <div className="divInfo">
                <img className='imgInfo' src={iconFat} alt="" />
                <span>Lipides</span>
            </div>
        </div>
    );
};

export default Cardinfo;