import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import  Navertical  from '../components/navVertical/Navertical ';
import "../styles/main.css";
import  ChartBar from '../components/chartBar/Chartbar';
import  ChartLine from '../components/chartLine/ChartLine';
import  ChartRadar from '../components/chartRadar/ChartRadar';

import Cardinfo from '../components/cardinfo/Cardinfo';
import Profil from '../components/profil/Profil';
import Scorechart from '../components/chartradialBar/ScoreChart';

/**
 * @file React component for the main page of the app
 * Render the whole page and call the charts components
 * @returns {JSX.Element} Main page components
 */

const Dashbord = () => {
    const URL =useParams()
    console.log(URL.id)
    
    /**
	 * Id of the wanted user, currently 12 or 18
	 * @type {number}
	 */
    const id = URL.id;
   

    return (
        <div>
            <Header />
            <Navertical />
             <Profil id={id}/>
           
            <div className='container-div'>
                <div className="chart-card-flex">
                   <div className='charts'>
                         <ChartBar id={id}/>
                        <div className='flex-charts'>
                           <ChartLine id={id}/> 
                         < ChartRadar id={id} />   
                         < Scorechart id={id}/> 
                        </div>
                    </div>
                   <Cardinfo id={id}/>
                </div>
            </div>
          
        </div>
    );
};

export default Dashbord;