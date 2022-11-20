import React from 'react';
import Header from '../components/Header';
import  Navertical  from '../components/Navertical ';
import "../styles/dashbord.css";
import Cardinfo from '../components/Cardinfo';
import Profil from '../components/Profil';
// import Graph from '../components/Graph';
// import { useEffect } from 'react';

const Dashbord = () => {
  
   
    return (
        <div>
            <Header />
         
            <Profil />
            {/* <Graph/> */}
            <Cardinfo/>
            <Navertical />
        </div>
    );
};

export default Dashbord;