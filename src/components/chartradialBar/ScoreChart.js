
import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import "../chartradialBar/chartRadialBar.css";

const data = [
    {
        name: 'score',
        score: 30,
        fill: 'red',
    },
];

export default function Scorechart() {
    return (
        <div className="radialBarchart">
            <h3 id="radialbarchart-title">Score</h3>
            <div id="radialbarchart-score">
                <span id="score-bold">30%</span> de votre objectif
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    innerRadius="70%"
                    endAngle={450}
                    startAngle={90}
                    outerRadius="80%" barSize={10} data={data}>
                    <RadialBar
                        // minAngle={15}
                        cornerRadius="50%"
                        dataKey="score"
                    />
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                    {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}









