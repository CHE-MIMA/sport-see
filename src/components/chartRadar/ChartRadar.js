// import "../styles/radarchart.css";
import React from 'react';
import "../chartRadar/radarchart.css"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const data = [
    {
        subject: 'cardio',
        A: 200,
        B: 1,
        fullMark: 240,
    },
    {
        subject: 'energy',
        A: 240,
        B: 2,
        fullMark: 240,
    },
    {
        subject: 'endurance',
        A: 80,
        B: 3,
        fullMark: 240,
    },
    {
        subject: 'strength',
        A: 80,
        B: 4,
        fullMark: 240,
    },
    {
        subject: 'speed',
        A: 220,
        B: 5,
        fullMark: 240,
    },
    {
        subject: 'intensity',
        A: 210,
        B: 6,
        fullMark: 240,
    },
];

export default function ChartRadar() {
    return (
        <div id='radarchartDiv'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}
                    margin={{
                        top: 0,
                        right: 45,
                        left: 20,
                        bottom: 0,
                    }}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="subject" tickLine={false}
                        tick={{ fontSize: 13, fontWeight: 500 }} stroke="#fff" />
                    <Radar dataKey="A" fill="#E60000" stroke="#E60000" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );

}
