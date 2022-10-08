import React from 'react'
import styled from 'styled-components/macro'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

import { Theme } from '../../styles/theme'

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 5,
        amt: 2400,
        day: 'пн',
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 10,
        amt: 2210,
        day: 'вт',
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 13,
        amt: 2290,
        day: 'ср',
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 19,
        amt: 2000,
        day: 'чт',
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 5,
        amt: 2181,
        day: 'пт',
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 9,
        amt: 2500,
        day: 'сб',
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 17,
        amt: 2100,
        day: 'вс',
    },
]

interface IChartProps {
    w?: number
    h?: number
}

const Chart: React.FC<IChartProps> = ({
    w = 300,
    h = 200,
}) => {
    return (
        <BarChart
            width={w}
            height={h}
            data={data}
            margin={{
                top: 0,
                right: 0,
                left: -40,
                bottom: 0,
            }}
            barSize={16}
        >
            <XAxis dataKey="day" scale="point" padding={{ left: 16, right: 16 }} tickLine={false} />
            <YAxis tickLine={false} />
            {/*<Tooltip />*/}
            <CartesianGrid strokeDasharray="3 3" stroke="none" />
            <Bar dataKey="pv" fill={Theme.color.ultramarine} isAnimationActive={false} />
        </BarChart>
    )
}

export default React.memo(Chart)
