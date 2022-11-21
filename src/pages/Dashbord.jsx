import React from 'react';
import Header from '../components/Header';
import  Navertical  from '../components/Navertical ';
import "../styles/dashbord.css";
import  Chart from '../components/Chart'

import Cardinfo from '../components/Cardinfo';
import Profil from '../components/Profil';
// import { useParams } from 'react-router-dom';
// import Data from '../user.json'
// import Graph from '../components/Graph';
// import { useEffect } from 'react';

const Dashbord = () => {
    // const { id } = useParams();
    // const userData = data.find((object) => object.id === id);

  
   
    return (
        <div>
            <Header />
             <Profil />
            <Chart />
            <Cardinfo />
            <Navertical />
        </div>
    );
};

export default Dashbord;