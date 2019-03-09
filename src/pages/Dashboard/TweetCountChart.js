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
import Chart from 'components/chart'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

class TweetCountChart extends React.Component {
    state = {
        data: []
    }

    componentDidMount () {
        this.fetchData()
        const intervalId = setInterval(this.fetchData, 10000)
        this.setState({intervalId: intervalId})
    }

    componentWillUnmount () {
        clearInterval(this.state.intervalId)
    }

    fetchData = async () => {
        const { client } = this.props
        try {
            const result = await client.query({
                query: getTweetCounts,
                variables: {
                  limit: 30
                },
                fetchPolicy: 'network-only'
            })

            const data = this.formatData(result.data.getTweetCounts)
            this.setState({ data: data })
        } catch (err) {
            console.log(err)
        }
    }

    formatData (data) {
        return data.map(item => ({
            name: moment(ObjectID(item._id).getTimestamp()).format('h:mm:ss a'),
            raga: item.raga_count,
            namo: item.namo_count
        })).reverse()
    }

    render() {
        const {
            data
        } = this.state

        return ( 
            <Paper>
                <Typography align='center' variant='h3'>Rahul vs Modi Live Tweet Count</Typography>
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
