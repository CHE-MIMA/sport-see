import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import "../styles/dashbord.css";


import { useEffect } from 'react';
import Cardinfo from '../components/Cardinfo';

const Dashbord = () => {
    useEffect(() => {
        fetch('http://localhost:3000/user/18')
            .then((response) => response.json()
                .then(({ data }) => console.log(data))
                .catch((error) => console.log(error))
                
            )
          
          
    }, [])
   
    return (
        <div>
            <Navigation />
            <div className='bonjour'>
                <h1>Bonjour</h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier</p>
            </div>
            <Cardinfo/>
            <Footer />

        </div>
    );
};

export default Dashbord;