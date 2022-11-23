import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { getActivityMainData } from '../../services/FetchApi';
// import { useEffect, useState } from 'react';



export default function ChartBar() {
    //     const [data, setData] = useState();
    //     useEffect(() => {

    //         getActivityMainData(18)
    //         fetch('http://localhost:3000/user/18/activity')
    //             .then((response) => response.json())
    //             .then((data) => { setData(data.data) })



    //     }, [])


    const activity = [
        {
            name: 1,
            kilogram: 70,
            calorie: 240,
            amt: 70,
        },
        {
            name: 2,
            kilogram: 69,
            calorie: 220,
            amt: 70,
        },
        {
            name: 3,
            kilogram: 70,
            calorie: 280,
            amt: 70,
        },
        {
            name: 4,
            kilogram: 70,
            calorie: 500,
            amt: 70,
        },
        {
            name: 5,
            kilogram: 69,
            calorie: 160,
            amt: 69,
        },
        {
            name: 6,
            kilogram: 69,
            calorie: 162,
            amt: 69,
        },
        {
            name: 7,
            kilogram: 69,
            calorie: 390,
            amt: 69,
        },
    ];

    return (
        <div id="chartBarDiv">
            <ResponsiveContainer width="70%" aspect={3}>
                <BarChart

                    data={activity}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 250,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 3" />

                    <XAxis axisLine={false} dataKey="name" />
                    <YAxis axisLine={false} orientation='right' />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="kilogram" radius={[10, 10, 0, 0]} barSize={8} fill="#282D30" />
                    <Bar dataKey="calorie" radius={[10, 10, 0, 0]} barSize={8} fill="#E60000" />

                </BarChart>

            </ResponsiveContainer>
        </div>
    );

};





