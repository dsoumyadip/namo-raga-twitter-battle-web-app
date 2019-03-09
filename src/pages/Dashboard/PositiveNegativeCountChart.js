import React from 'react'
import moment from 'moment'
import { ObjectID } from 'mongodb'
/**
 * Data
 */
import {
    gql
} from 'apollo-boost'
import {
    withApollo
} from 'react-apollo'
/**
 * UI
 */
import Chart from 'components/lineChart'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

class PositiveNegativeCountChart extends React.Component {
    state = {
        data: [],
        lastId: null
    }

    componentDidMount () {
        this.fetchInitData()
        const intervalId = setInterval(this.fetchData, 10000)
        this.setState({intervalId: intervalId})
    }

    componentWillUnmount () {
        clearInterval(this.state.intervalId)
    }

    fetchInitData = async () => {
        const { client } = this.props
        try {
            const result = await client.query({
                query: getSentimentCounts,
                variables: {
                  limit: 50
                },
                fetchPolicy: 'network-only'
            })

            const data = this.formatData(result.data.getSentimentCounts.reverse())
            const lastId = result.data.getSentimentCounts[0]._id
            this.setState({ data, lastId })
        } catch (err) {
            console.log(err)
        }
    }

    fetchData = async () => {
        const { client } = this.props
        const { data, lastId } = this.state
        try {
            const result = await client.query({
                query: getSentimentCounts,
                variables: {
                  limit: 1,
                  lastId: lastId
                },
                fetchPolicy: 'network-only'
            })

            if (result.data && result.data.getSentimentCounts && result.data.getSentimentCounts.length) {
                const newData = this.formatData(result.data.getSentimentCounts)
                const newLastId = result.data.getSentimentCounts[0]._id
                data.shift()
                data.push(newData[0])
                this.setState({ data: data, lastId: newLastId })
            }
        } catch (err) {
            console.log(err)
        }
    }

    formatData (data) {
        return data.map(item => ({
            name: moment(ObjectID(item._id).getTimestamp()).format('h:mm:ss a'),
            ragaPositive: item.raga_positive,
            ragaNegative: item.raga_negative,
            namoPositive: item.namo_positive,
            namoNegative: item.namo_negative
        }))
    }

    render() {
        const {
            data
        } = this.state

        return (
            <React.Fragment>
                <Paper>
                    <br/>
                    <Typography align='center' variant='h4' gutterBottom>Rahul vs Modi Live Positive Tweet Count</Typography>
                    <Divider/>
                    <br/>
                    <Chart
                        data={data}
                        yAxisLabel='Tweet count'
                        xAxisLabel='Timestamp'
                        Legend1='Rahul positive tweet count'
                        DataKey1='ragaPositive'
                        Legend2='Modi positive tweet count'
                        DataKey2='namoPositive'
                    />
                </Paper>
                <br/>
                <Paper>
                    <br/>
                    <Typography align='center' variant='h4' gutterBottom>Rahul vs Modi Live Negative Tweet Count</Typography>
                    <Divider/>
                    <br/>
                    <Chart
                        data={data}
                        yAxisLabel='Tweet count'
                        xAxisLabel='Timestamp'
                        Legend1='Rahul negative tweet count'
                        DataKey1='ragaNegative'
                        Legend2='Modi negative tweet count'
                        DataKey2='namoNegative'
                    />
                </Paper>
            </React.Fragment>
        )
    }
}

const getSentimentCounts = gql `
    query ($lastId: ID, $limit: Int) {
        getSentimentCounts (
            lastId: $lastId,
            limit: $limit
        ) {
            _id
            raga_positive
            raga_negative
            namo_positive
            namo_negative
        }
    }
`

export default withApollo(PositiveNegativeCountChart)
