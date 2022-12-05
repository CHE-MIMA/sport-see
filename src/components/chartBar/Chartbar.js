import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import { useEffect, useState } from 'react';
import { getActivityMainData } from '../../services/FetchApi';
import '../chartBar/chartbar.css';
import PropTypes from "prop-types";

/**
 * @component React component : activity chart
 * @param {number} id
 * @returns {JSX.Element}
 */
export default function ChartBar({ id }) {


    const [datas, setData] = useState();



    useEffect(() => {

        async function getActivityData() {
            /**
           * Call the import and format function
           * @param {number} id
           * @return {Array<object>} activity datas (day, kg and calories)
           */
            const newData = await getActivityMainData(id)
            // console.log(newData);
            setData(newData)

            // console.log(getUserMainData(18));

        }
        getActivityData();

    }, [id],);


    /**
     * @param {boolean}  [Props.active='true']
     * @param {array}   [Props.payload=[]]
     * @returns an active tooltip
     */
    function CustomTooltip({ active, payload }) {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p >{`${payload[0].value} kg`}</p>
                    <p > {`${payload[1].value} kCal`}</p>
                </div>
            );
        }

        return null;
    }

    CustomTooltip.propTypes = {
        active: PropTypes.bool,
        payload: PropTypes.array,
    };

    /**
     * @param {number} x The coordinates x
     * @param {number} y The coordinates y
     * @param {number} height The height of the rectangle
  
     * @returns rectangle grey
     */
    const CustomCursor = ({ x, y, height }) => {
        return <Rectangle fill="#C4C4C4" opacity={0.4} x={x + 30} y={y} width={60} height={height} />;
    };
    CustomCursor.propTypes = {
        x: PropTypes.number,
        y: PropTypes.number,
        height: PropTypes.number,
    };


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
            <ResponsiveContainer width="100%" aspect={4}>
                <BarChart

                    data={datas}
                    margin={{
                        top: 5,
                        right: 5,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 3"
                        vertical={false}
                        stroke="grey"
                    />

                    <XAxis stroke="grey" tickLine={false}
                        tick={{ fontSize: 14, fontWeight: 500 }}
                        dy={10} axisLine={false} dataKey="index"
                    />
                    <YAxis
                        yAxisId="kg"
                        domain={["dataMin -1", "dataMax +2"]}
                        dataKey="kilogram"
                        stroke="grey"
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        tickCount={3}
                    />
                    <YAxis
                        yAxisId="cal"
                        dataKey="calories"
                        orientation="false"
                        axisLine={false}
                        tickLine={false}
                        hide={true}
                    />



                    <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />


                    <Bar yAxisId="kg" dataKey="kilogram" radius={[10, 10, 0, 0]} barSize={8} fill="#282D30" />
                    <Bar yAxisId="cal" dataKey="calories" radius={[10, 10, 0, 0]} barSize={8} fill="#E60000" />

                </BarChart>

            </ResponsiveContainer>
        </div>
    );


}

ChartBar.propTypes = {
    id: PropTypes.number.isRequired,
};






