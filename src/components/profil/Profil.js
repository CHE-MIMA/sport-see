import { useEffect, useState } from "react";
import React from 'react';
import { getUserMainData } from '../../services/FetchApi';
import "../profil/profil.css";
import PropTypes from "prop-types";
// import USER_MAIN_DATA from '../../data/data';

/**
 * @component React component for the welcome and firstName of the user.
 * @param {number} id
 * @returns {JSX.Element}
 */
export default function Profil({ id }) {

    console.log(id);
    const [data, setData] = useState();

    useEffect(() => {
        async function getUserData() {
            /**
             * Call the import and format function
             * @param {number} id
             * @return {{}} user datas (id, userInfos, score, keyData)
             */
            const newData = await getUserMainData(id)
            setData(newData)
            // console.log(getUserMainData(18));
        }
        getUserData();

    }, [id]);


    return (
        <div className='bonjour'>
            <h2 className="profil-title">Bonjour
                <span className="profil-span"> {data?.firstName} </span>
            </h2>
            <p className="profil-p" >Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

Profil.propTypes = {
    id: PropTypes.number.isRequired,
};


