import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

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
        <ResponsiveContainer width="30%" aspect={2}>
            <LineChart

                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 200,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" axisLine={false} dy={20} fill='#FFF' />


                <Line type="monotone" dataKey="pv" stroke="red" strokeWidth={2} dot={false} />

            </LineChart>
        </ResponsiveContainer>
    );

}
