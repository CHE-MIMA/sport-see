import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import '../chartLine/chartline.css';
const data = [
    {
        name: 'L',
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'M',
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'M',
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'J',
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'V',
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'S',
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'D',
        pv: 4300,
        amt: 2100,
    },
];

export default function ChartLine() {


    return (
        <div id='linechartDiv'>
            <ResponsiveContainer width="100%" height='100%'>
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="0 0" />
                    <XAxis dataKey="name" axisLine={false} dy={10} stroke="#fff" />


                    <Line type="monotone" dataKey="pv" stroke="#fff" strokeWidth={2} dot={false} />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );

}
