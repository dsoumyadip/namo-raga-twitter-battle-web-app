import React from 'react'
/**
 * Chart components
 */
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts'

const Chart = props => {
    const {
        data,
        xDataKey,
        xLabel,
        yDataKey,
        yLabel
    } = props
    return (
        <ResponsiveContainer width='100%' height={300}>
            <LineChart data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey='name'/>
                <YAxis/>
                <CartesianGrid strokeDasharray='3 3'/>
                <Tooltip/>
                <Legend />
                <Line name={xLabel} type='monotone' dataKey={xDataKey} stroke='#8884d8' activeDot={{r: 8}}/>
                <Line name={yLabel} type='monotone' dataKey={yDataKey} stroke='#82ca9d' activeDot={{r: 8}}/>
            </LineChart>
        </ResponsiveContainer>
    );
}

export default Chart
