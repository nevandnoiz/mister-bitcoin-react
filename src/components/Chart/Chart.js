import React from 'react'
import './Chart.css'
import { Sparklines, SparklinesLine } from 'react-sparklines';

function Chart(props) {
    const { chart, color } = props
    return (
        <div className="chart-container">
            <h1>{chart.name}</h1>
            <Sparklines data={chart.data}>
                <SparklinesLine color={color} ></SparklinesLine>
            </Sparklines>
            <h2>{chart.description}</h2>
        </div>
    )
}

export default Chart