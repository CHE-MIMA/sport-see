import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import '../chartLine/chartline.css';
const data = [
    {
        name: 'L',
        session: 30,

    },
    {
        name: 'M',
        session: 40,

    },
    {
        name: 'M',
        session: 50,

    },
    {
        name: 'J',
        session: 30,

    },
    {
        name: 'V',
        session: 30,

    },
    {
        name: 'S',
        session: 50,

    },
    {
        name: 'D',
        session: 50,

    },
];

export default function ChartLine() {


    return (
        <div id='linechartDiv'>
            <div className="titleLineChart">
                Durée moyenne des
                <br />
                sessions
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart

                    data={data}
                    margin={{
                        top: 100,
                        right: 0,
                        left: 5,
                        bottom: 0,
                    }}
                >

                    <XAxis dataKey="name"
                        stroke="none"
                        tick={{ fill: "rgba(255, 255, 255, 0.5)" }} />

                    <YAxis dataKey="session" hide={true} />
                    <Line type="monotone" dataKey="session" stroke="#fff" strokeWidth={2} dot={0} />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );

}
