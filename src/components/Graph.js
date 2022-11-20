import React from 'react';
import { Bar } from "react-chartjs-2";


const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [
        {
            type: 'category',
            label: "Activité quotidienne",
            data: ['69', '70', '69', '70', '69', '70', '69', '71', '70', '69'],
            backgroundColor: ["black", "black", "black", "black", "black", "black", "black", "black", "black", "black"],

        }
    ],
}
const options = {
    maintainAspectRatio: false,
}
const Graph = () => {

    return (
        <div className='graph'>
            <div className='container'>
                <div className='card'>
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default Graph;