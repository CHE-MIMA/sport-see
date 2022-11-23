import React from 'react';
import Header from '../components/Header';
import  Navertical  from '../components/Navertical ';
import "../styles/dashbord.css";
import  ChartBar from '../components/charts/Chartbar';
import  ChartLine from '../components/charts/ChartLine';
import  ChartRadar from '../components/charts/RadarChart';
// import  ScoreChart from '../components/charts/RadialBarChart';


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
            <div className='container-div'>
                <div className='charts'>
                   <ChartBar />
                    <div className='flex-charts'>
                     <ChartLine />
                    < ChartRadar />
                   {/* < ScoreChart />  */}
                    </div>
                </div>
                <Cardinfo />
            </div>
            <Navertical />
        </div>
    );
};

export default Dashbord;