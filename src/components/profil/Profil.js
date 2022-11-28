import { useEffect, useState } from "react";
import React from 'react';
import { getUserMainData } from '../../services/FetchApi';
import "../profil/profil.css";
// import USER_MAIN_DATA from '../../data/data';

const Profil = ({ id }) => {
    // const data = USER_MAIN_DATA;
    // for (let index = 0; index < data.length; index++) {
    //     const element = data[index];
    //     console.log(element);
    // }
    console.log(id);
    const [data, setData] = useState();
    useEffect(() => {
        async function getUserData() {

            setData(await getUserMainData(id))
            // console.log(getUserMainData(18));
        }
        getUserData();
    }, [id])


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


