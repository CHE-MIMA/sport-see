import { useEffect, useState } from "react";
import React from 'react';
import { getUserMainData } from '../../services/FetchApi';
import "../profil/profil.css";
// import USER_MAIN_DATA from '../../data/data';

const Profil = ({ id }) => {

    console.log(id);
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function getUserData() {
            const newData = await getUserMainData(id)
            setData(newData)
            // console.log(getUserMainData(18));
        }
        getUserData();
        setIsLoading(false);
    }, [isLoading, id]);


    return (
        <div className='bonjour'>
            <h2 className="profil-title">Bonjour
                <span className="profil-span"> {data?.firstName} </span>
            </h2>
            <p className="profil-p" >Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default Profil;


