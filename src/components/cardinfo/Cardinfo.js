import React from 'react';
import { useEffect, useState } from 'react';
import iconCalorie from '../../assets/calories-icon.png';
import iconCarbs from '../../assets/carbs-icon.png';
import iconFat from '../../assets/fat-icon.png';
import iconProtein from '../../assets/protein-icon.png';
import { getUserMainData } from '../../services/FetchApi';
import '../cardinfo/cardinfo.css'
import PropTypes from "prop-types";


/**
 * @component React component :  user keydata information
 * @param {number} id
 * @returns {JSX.Element}
 */

export default function Cardinfo({ id }) {

    // console.log(id);
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function getUserData() {
            /**
              * Call the import and format function
              * @param {number} id
              * @return {{}} user datas (id, userInfos, score, keyData)
              */
            const newData = await getUserMainData(id)
            setData(newData)

        }
        getUserData();
        setIsLoading(false);
    }, [isLoading, id]);

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


Cardinfo.propTypes = {
    id: PropTypes.number.isRequired,
};