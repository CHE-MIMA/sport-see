import React from 'react';
import { useEffect, useState } from 'react';
import iconCalorie from '../../assets/calories-icon.png';
import iconCarbs from '../../assets/carbs-icon.png';
import iconFat from '../../assets/fat-icon.png';
import iconProtein from '../../assets/protein-icon.png';
import { getUserMainData } from '../../services/FetchApi';
import '../cardinfo/cardinfo.css'

const Cardinfo = () => {
    const [data, setData] = useState();
    useEffect(() => {

        getUserMainData(18)
        fetch('http://localhost:3000/user/18')
            .then((response) => response.json())
            .then((data) => { setData(data.data) })




    }, [])
    return (
        <div className="info-card">
            <div className="divInfo">
                <img className='imgInfo' src={iconCalorie} alt="" />
                <div className='flex-card'>
                    <h1 className='titre-info'>{data?.keyData.calorieCount} kCal</h1>
                    <span>Calories</span>
                </div>
            </div>
            <div className="divInfo">
                <img className='imgInfo' src={iconProtein} alt="" />
                <div className='flex-card'>
                    <h1 className='titre-info'>{data?.keyData.proteinCount} g</h1>
                    <span>Proteines</span>
                </div>
            </div>
            <div className="divInfo">
                <img className='imgInfo' src={iconCarbs} alt="" />
                <div className='flex-card'>
                    <h1 className='titre-info'>{data?.keyData.carbohydrateCount} g</h1>
                    <span>Glucides</span>
                </div>
            </div>
            <div className="divInfo">
                <img className='imgInfo' src={iconFat} alt="" />
                <div className='flex-card'>
                    <h1 className='titre-info'>{data?.keyData.lipidCount} g</h1>
                    <span>Lipides</span>
                </div>
            </div>
        </div>
    );
};

export default Cardinfo;