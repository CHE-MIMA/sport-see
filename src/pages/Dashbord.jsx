import React from 'react';
import Header from '../components/header/Header';
import  Navertical  from '../components/navVertical/Navertical ';
import "../styles/main.css";
import  ChartBar from '../components/chartBar/Chartbar';
import  ChartLine from '../components/chartLine/ChartLine';
import  ChartRadar from '../components/chartRadar/ChartRadar';
// import  ScoreChart from '../components/charts/RadialBarChart';
import Cardinfo from '../components/cardinfo/Cardinfo';
import Profil from '../components/profil/Profil';

import Scorechart from '../components/chartradialBar/ScoreChart';

const Dashbord = () => {
    return (
        <div>
            <Header />
            <Navertical />
             <Profil />
           
            <div className='container-div'>
                <div className='charts'>
                   <ChartBar />
                    <div className='flex-charts'>
                     <ChartLine />
                    < ChartRadar />
                    < Scorechart/> 
                    </div>
                  
                </div>
                <Cardinfo />
            </div>
          
        </div>
    );
};

export default Dashbord;