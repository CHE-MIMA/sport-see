import { useEffect, useState } from "react";
import React from 'react';


const Profil = () => {

    // useEffect(() => {
    //     fetch('http://localhost:3000/user/18')
    //         .then((response) => response.json()
    //             .then(({ data }) => { setData(data) })

    //         )


    // }, [])
    // useEffect(() => {

    //     fetch(`http://localhost:8000/user/18`)
    //     .then((response) => response.json())
    //     .then(({ data }) => {
    //     setData(data)

    //     })
    // }, [])

    // const [ProfilData, setProfilData] = useState({})
    const { data, setUserData } = useState({});
    useEffect(() => {

        async function fetchProfil() {

            try {
                const response = await fetch(`http://localhost:3000/user/18`)
                const { data } = await response.json()
                setUserData(data)

            } catch (err) {
                console.log(err)
            }

        }
        fetchProfil();
    }, [])
    // if (error) {
    //     return <span>Oups il y a eu un problème</span>
    // }

    return (
        <div className='bonjour'>
            <h1>Bonjour
                <span>{data}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default Profil;


