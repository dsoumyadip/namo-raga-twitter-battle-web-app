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

class TweetCountChart extends React.Component {
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
                query: getTweetCounts,
                variables: {
                  limit: 50
                },
                fetchPolicy: 'network-only'
            })

            const data = this.formatData(result.data.getTweetCounts.reverse())
            const lastId = result.data.getTweetCounts[0]._id
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
                query: getTweetCounts,
                variables: {
                  limit: 1,
                  lastId: lastId
                },
                fetchPolicy: 'network-only'
            })

            if (result.data && result.data.getTweetCounts && result.data.getTweetCounts.length) {
                const newData = this.formatData(result.data.getTweetCounts)
                const newLastId = result.data.getTweetCounts[0]._id
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
            raga: item.raga_count,
            namo: item.namo_count
        }))
    }

    render() {
        const {
            data
        } = this.state

        return ( 
            <Paper>
                <br/>
                <Typography align='center' variant='h4' color='secondary' gutterBottom>Rahul vs Modi Live Tweet Count</Typography>
                <Divider/>
                <br/>
                <Chart
                    data={data}
                    yAxisLabel='Tweet count'
                    xAxisLabel='Timestamp'
                    Legend1='Rahul tweet count'
                    DataKey1='raga'
                    Legend2='Modi tweet count'
                    DataKey2='namo'
                />
            </Paper>
        )
    }
}

const getTweetCounts = gql `
    query ($lastId: ID, $limit: Int) {
        getTweetCounts (
            lastId: $lastId,
            limit: $limit
        ) {
            _id
            namo_count
            raga_count
        }
    }
`

export default withApollo(TweetCountChart)
