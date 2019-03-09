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
/**
 * UI
 */
import Typograph from '@material-ui/core/Typography'

const Chart = props => {
    const {
        data,
        yAxisLabel,
        xAxisLabel,
        DataKey1,
        Legend1,
        DataKey2,
        Legend2
    } = props
    return (
        <ResponsiveContainer width='100%' height={300}>
            <LineChart data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey='name' label={{ value: xAxisLabel, position: 'insideBottomRight', offset: -10 }}/>
                <YAxis label={{ value: yAxisLabel, angle: -90, position: 'insideLeft' }}/>
                <CartesianGrid strokeDasharray='3 3'/>
                <Tooltip/>
                <Legend />
                <Line name={Legend1} type='monotone' dataKey={DataKey1} stroke='blue' activeDot={{r: 8}}/>
                <Line name={Legend2} type='monotone' dataKey={DataKey2} stroke='orange' activeDot={{r: 8}}/>
            </LineChart>
        </ResponsiveContainer>
    );
}

export default Chart
