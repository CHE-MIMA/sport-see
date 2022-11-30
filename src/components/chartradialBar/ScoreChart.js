import { useEffect, useState } from "react";
import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { getUserMainData } from '../../services/FetchApi';
import "../chartradialBar/chartRadialBar.css";




export default function Scorechart({ id }) {

    console.log(id);
    const [data, setData] = useState();
    useEffect(() => {
        async function getUserData() {

            setData(await getUserMainData(id))
            // console.log(getUserMainData(18));
        }
        getUserData();
    }, [id])
    console.log(data)
    const score = data?.todayScore * 100
    console.log(score);
    const dataScore = [
        {
            name: 'score',
            value: score,
            fill: 'red',
        },
    ];

    return (
        <div className="radialBarchart">
            <h3 id="radialbarchart-title">Score</h3>
            <div id="radialbarchart-score">
                <span id="score-bold">{score}%</span> de votre objectif
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    innerRadius="70%"
                    endAngle={450}
                    startAngle={90}
                    outerRadius="80%" barSize={10} data={dataScore}>
                    <RadialBar
                        // minAngle={15}
                        cornerRadius="50%"
                        dataKey="value"
                    />
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                    {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}









