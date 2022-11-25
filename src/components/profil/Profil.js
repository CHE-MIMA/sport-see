import { useEffect, useState } from "react";
import React from 'react';
import { getUserMainData } from '../../services/FetchApi';
import "../profil/profil.css";

const Profil = () => {
    const [data, setData] = useState();
    useEffect(() => {

        getUserMainData(18)
        fetch('http://localhost:3000/user/18')
            .then((response) => response.json())
            .then((data) => { setData(data.data) })




    }, [])
    // useEffect(() => {

    //     fetch(`http://localhost:8000/user/12`)
    //     .then((response) => response.json())
    //     .then(({ data }) => {
    //     setData(data)

    //     })
    // }, [])


    // useEffect(() => {

    //     async function fetchProfil() {

    //         try {
    //             const response = await fetch(`http://localhost:3000/user/18`)
    //             const { data } = await response.json()
    //             setUserData(data)

    //         } catch (err) {
    //             console.log(err)
    //         }

    //     }
    //     fetchProfil();
    // }, [])
    // if (error) {
    //     return <span>Oups il y a eu un problème</span>
    // }

    return (
        <div className='bonjour'>
            <h2 className="profil-title">Bonjour
                <span className="profil-span"> {data?.userInfos.firstName} </span>
            </h2>
            <p className="profil-p" >Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default Profil;


