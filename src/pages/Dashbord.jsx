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
import { useParams } from 'react-router-dom';
import Scorechart from '../components/chartradialBar/ScoreChart';

const Dashbord = () => {
    const URL =useParams()
    console.log(URL.id)
    return (
        <div>
            <Header />
            <Navertical />
             <Profil id={URL.id}/>
           
            <div className='container-div'>
                <div className="chart-card-flex">
                   <div className='charts'>
                         <ChartBar />
                        <div className='flex-charts'>
                         <ChartLine />
                         < ChartRadar />
                         < Scorechart/> 
                        </div>
                    </div>
                   <Cardinfo id={URL.id}/>
                </div>
            </div>
          
        </div>
    );
};

export default Dashbord;