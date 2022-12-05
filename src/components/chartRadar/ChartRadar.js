// import "../styles/radarchart.css";
import React from 'react';
import "../chartRadar/radarchart.css"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { getPerformanceMainData } from '../../services/FetchApi';
import PropTypes from "prop-types";

/**
 * @component React component : performances chart
 * @param {number} id
 * @returns {JSX.Element}
 */

export default function ChartRadar({ id }) {
    console.log(id);
    const [data, setData] = useState();


    useEffect(() => {
        async function getPerformanceData() {
            /**
               * Call the import and format function
               * @param {number} id
               * @return {Array<object>}  performance datas (kind, value)
               */
            const newData = await getPerformanceMainData(id);
            setData(newData)


        }
        getPerformanceData();

    }, [id])

    return (
        <div id='radarchartDiv'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}
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
ChartRadar.propTypes = {
    id: PropTypes.number.isRequired,
};