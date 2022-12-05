import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Rectangle } from 'recharts';
import '../chartLine/chartline.css';
import { useEffect, useState } from 'react';
import { getSessionMainData } from '../../services/FetchApi';
import PropTypes from "prop-types";

/**
 * @component React component : average sesssions chart
 * @param {number} id
 * @returns {JSX.Element}
 */

export default function ChartLine({ id }) {
    console.log(id);
    const [data, setData] = useState();


    useEffect(() => {
        async function getSessionsData() {
            /**
            * Call the import and format function
            * @param {number} id
            * @return {Array<object>} average sessions datas (day, sessionsLenght)
            */
            const newData = await getSessionMainData(id);
            setData(newData)
            // console.log(getUserMainData(18));

        }
        getSessionsData();

    }, [id])

    /**
     * @param {boolean}  [Props.active='true']
     * @param {array}   [Props.payload=[]]
     * @returns an active tooltip
     */
    const CustomTooltipLine = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="session-tooltip">
                    <p className="session-tooltip-min">{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    };

    CustomTooltipLine.propTypes = {
        active: PropTypes.bool,
        payload: PropTypes.array,
    };

    /** 

     * @param {Array} points The coordinates of the points (number) of the rectangle
     * @returns dark rectangle
     */
    const CustomCursorLine = ({ points }) => {
        return <Rectangle fill="#000000" opacity={0.2} x={points[0].x} width={300} height={300} />;
    };
    CustomCursorLine.propTypes = {
        points: PropTypes.array,
    };



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

                    <XAxis dataKey="day"
                        stroke="none"
                        tick={{ fill: "rgba(255, 255, 255, 0.5)" }} />

                    <YAxis dataKey="sessionLength" hide={true} />
                    <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={2} dot={0} />
                    <Tooltip content={<CustomTooltipLine />}
                        cursor={<CustomCursorLine />} />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );


}
ChartLine.propTypes = {
    id: PropTypes.number.isRequired,
};

