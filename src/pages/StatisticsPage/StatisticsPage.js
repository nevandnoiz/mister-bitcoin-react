import React, { Component } from 'react'
import axios from 'axios'
import Chart from '../../components/Chart/Chart.js'
import StorageService from '../../services/StorageService.js'

export class StatisticsPage extends Component {
    state = {
        marketPriceChart: {},
        transactionsChart: {},
    }
    marketPriceChart = async () => {
        if (StorageService.loadFromStorage('market-chart')) {
            return this.setState({ marketPriceChart: StorageService.loadFromStorage('market-chart') })
        } else {
            let res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=12months&format=json&cors=true')
            let chart = this.createChartData(res.data)
            this.setState({ marketPriceChart: chart })
            StorageService.saveToStorage('market-chart', chart)
        }
    }

    transactionsChart = async () => {
        if (StorageService.loadFromStorage('transactions-chart')) {
            return this.setState({ transactionsChart: StorageService.loadFromStorage('transactions-chart') })
        } else {
            let res = await axios.get('https://api.blockchain.info/charts/n-transactions?timespan=12months&format=json&cors=true')
            let chart = this.createChartData(res.data)
            this.setState({ transactionsChart: chart })
            StorageService.saveToStorage('transactions-chart', chart)
        }
    }

    createChartData = (chart) => {
        let values=chart.values
        chart.data = values.map(value => value.y)
        return chart
    }

    async componentDidMount() {
        await this.marketPriceChart()
        await this.transactionsChart()
    }

    render() {
    const {marketPriceChart,transactionsChart}=this.state
        return (
            <div>
                <Chart color={'green'} chart={marketPriceChart} />
                <hr/>
                <Chart color={'blue'} chart={transactionsChart} />
            </div>
        )
    }
}

export default StatisticsPage
