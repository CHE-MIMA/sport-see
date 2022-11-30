// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// import { useEffect, useState } from 'react';
// import { getActivityMainData } from '../../services/FetchApi';
// import '../chartBar/chartbar.css';


// export default function ChartBar({ id }) {

//     console.log(id);
//     const [data, setData] = useState();


//     useEffect(() => {
//         async function getActivityData() {

//             setData(await getActivityMainData(id))
//             // console.log(getUserMainData(18));

//         }
//         getActivityData();

//     }, [id])
//     console.log(data);
//     const session = data?.sessions;
//     console.log(session);
//     const userActivityData = [];



//     for (let i = 0; i < session.length; i++) {

//         userActivityData.push({
//             index: i + 1,
//             kilogram: session[i].kilogram,
//             calories: session[i].calories,
//         });
//     }



//     // const activity = [
//     //     {
//     //         index: 1,
//     //         kilogram: 69,
//     //         calories: 240,

//     //     },
//     //     {
//     //         index: 2,
//     //         kilogram: 69,
//     //         calories: 220,

//     //     },
//     //     {
//     //         index: 3,
//     //         kilogram: 70,
//     //         calories: 280,

//     //     },
//     //     {
//     //         index: 4,
//     //         kilogram: 70,
//     //         calories: 500,

//     //     },
//     //     {
//     //         index: 5,
//     //         kilogram: 69,
//     //         calories: 160,

//     //     },
//     //     {
//     //         index: 6,
//     //         kilogram: 69,
//     //         calories: 162,

//     //     },
//     //     {
//     //         index: 7,
//     //         kilogram: 69,
//     //         calories: 390,

//     //     },
//     // ];

//     return (
//         <div id="chartBarDiv">
//             <div className="info-graphic">
//                 <div className="title-graphic ">Activité quotidienne</div>

//                 <div className="legends">
//                     <div className="circle">
//                         <div className="point black"></div>&nbsp; Poids (kg)
//                     </div>
//                     <div className="circle">
//                         <div className="point red"></div>&nbsp; Calories brûlées (kCal)
//                     </div>
//                 </div>
//             </div>
//             <ResponsiveContainer width="100%" aspect={4}>
//                 <BarChart

//                     data={userActivityData}
//                     margin={{
//                         top: 5,
//                         right: 5,
//                         left: 0,
//                         bottom: 5,
//                     }}
//                 >
//                     <CartesianGrid strokeDasharray="1 3"
//                         vertical={false}
//                         stroke="grey"
//                     />

//                     <XAxis stroke="grey" tickLine={false}
//                         tick={{ fontSize: 14, fontWeight: 500 }}
//                         dy={10} axisLine={false} dataKey="index"
//                     />
//                     <YAxis
//                         yAxisId="kg"
//                         dataKey="kilogram"
//                         stroke="grey"
//                         orientation="right"
//                         axisLine={false}
//                         tickLine={false}
//                         tickCount={3}
//                     />
//                     <YAxis
//                         yAxisId="cal"
//                         dataKey="calories"
//                         orientation="false"
//                         axisLine={false}
//                         tickLine={false}
//                         hide={true}
//                     />



//                     <Tooltip />


//                     <Bar yAxisId="kg" dataKey="kilogram" radius={[10, 10, 0, 0]} barSize={8} fill="#282D30" />
//                     <Bar yAxisId="cal" dataKey="calories" radius={[10, 10, 0, 0]} barSize={8} fill="#E60000" />

//                 </BarChart>

//             </ResponsiveContainer>
//         </div>
//     );

// };





