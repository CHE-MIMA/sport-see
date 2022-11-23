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


const Dashbord = () => {
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