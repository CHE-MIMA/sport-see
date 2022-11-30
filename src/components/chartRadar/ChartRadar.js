// import "../styles/radarchart.css";
import React from 'react';
import "../chartRadar/radarchart.css"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { getPerformanceMainData } from '../../services/FetchApi';
// const data = [
// const data = [
//     {
//         subject: 'cardio',
//         A: 200,
//         B: 1,
//         fullMark: 240,
//     },
//     {
//         subject: 'energy',
//         A: 240,
//         B: 2,
//         fullMark: 240,
//     },
//     {
//         subject: 'endurance',
//         A: 80,
//         B: 3,
//         fullMark: 240,
//     },
//     {
//         subject: 'strength',
//         A: 80,
//         B: 4,
//         fullMark: 240,
//     },
//     {
//         subject: 'speed',
//         A: 220,
//         B: 5,
//         fullMark: 240,
//     },
//     {
//         subject: 'intensity',
//         A: 210,
//         B: 6,
//         fullMark: 240,
//     },
// ];

export default function ChartRadar({ id }) {
    console.log(id);
    const [data, setData] = useState();


    useEffect(() => {
        async function getPerformanceData() {

            setData(await getPerformanceMainData(id))
            // console.log(getUserMainData(18));

        }
        getPerformanceData();

    }, [id])
    const performanceData = data?.data;
    const userPerformanceData = [];
    const kindName = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];

    /* In this loop, we push the kind name corresponding to the value. */
    for (let i = 0; i < performanceData.length; i++) {
        userPerformanceData.push({
            kind: kindName[i],
            value: performanceData[i].value,
        });
    }
    return (
        <div id='radarchartDiv'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userPerformanceData}
                    margin={{
                        top: 0,
                        right: 70,
                        left: 0,
                        bottom: 0,
                    }}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" tickLine={false}
                        tick={{ fontSize: 10, fontWeight: 400 }} stroke="#fff" />
                    <Radar dataKey="value" fill="#E60000" stroke="#E60000" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );

}
