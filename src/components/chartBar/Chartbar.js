import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { getActivityMainData } from '../../services/FetchApi';
// import { useEffect, useState } from 'react';
import '../chartBar/chartbar.css';


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

        },
        {
            name: 2,
            kilogram: 69,
            calorie: 220,

        },
        {
            name: 3,
            kilogram: 70,
            calorie: 280,

        },
        {
            name: 4,
            kilogram: 70,
            calorie: 500,

        },
        {
            name: 5,
            kilogram: 69,
            calorie: 160,

        },
        {
            name: 6,
            kilogram: 69,
            calorie: 162,

        },
        {
            name: 7,
            kilogram: 69,
            calorie: 390,

        },
    ];

    return (
        <div id="chartBarDiv">
            <div className="info-graphic">
                <div className="title-graphic ">Activité quotidienne</div>

                <div className="legends">
                    <div className="circle">
                        <div className="point black"></div>&nbsp; Poids (kg)
                    </div>
                    <div className="circle">
                        <div className="point red"></div>&nbsp; Calories brûlées (kCal)
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" aspect={5}>
                <BarChart

                    data={activity}
                    margin={{
                        top: 5,
                        right: 5,
                        left: 30,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 3"
                        vertical={false}
                        stroke="grey"
                    />

                    <XAxis stroke="grey" tickLine={false}
                        tick={{ fontSize: 14, fontWeight: 500 }}
                        dy={10} axisLine={false} dataKey="name" />
                    <YAxis
                        yAxisId="kg"
                        dataKey="kilogram"
                        stroke="grey"
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        tickCount={3}
                    />
                    <YAxis
                        yAxisId="cal"

                        dataKey="calorie"
                        orientation="false"
                        axisLine={false}
                        tickLine={false}
                        hide={true}
                    />



                    <Tooltip />


                    <Bar yAxisId="kg" dataKey="kilogram" radius={[10, 10, 0, 0]} barSize={8} fill="#282D30" />
                    <Bar yAxisId="cal" dataKey="calorie" radius={[10, 10, 0, 0]} barSize={8} fill="#E60000" />

                </BarChart>

            </ResponsiveContainer>
        </div>
    );

};





