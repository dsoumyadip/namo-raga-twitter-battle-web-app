import React from 'react'
import moment from 'moment'
/**
 * Data
 */
import {
    gql
} from 'apollo-boost'
import {
    graphql
} from 'react-apollo'
/**
 * UI
 */
import Chart from 'components/lineChart'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

class HistoricalTweetCountChart extends React.Component {
    state = {
        data: []
    }

    componentWillReceiveProps (nextProps) {
        if (!nextProps.data.loading && nextProps.data.getHistoricalTweetCounts) {
            const data = this.formatData(nextProps.data.getHistoricalTweetCounts)
            this.setState({ data })
        }
    }

    formatData (data) {
        return data.map(item => ({
            name: moment(Number(item._id)).format('DD MMM h:mm a'),
            raga: item.raga_count,
            namo: item.namo_count
        }))
    }

    render () {
        const { data } = this.state
        return (
            <Paper>
                <br/>
                <Typography align='center' variant='h4' gutterBottom>Rahul vs Modi Historical Tweet Count</Typography>
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

const getHistoricalTweetCounts = gql`
    query ($from: String, $to: String) {
        getHistoricalTweetCounts (from: $from, to: $to) {
            _id
            namo_count
            raga_count
        }
    }
`

export default graphql(getHistoricalTweetCounts, {
    options: ({ from, to }) => {
        return {
            variables: {
                from: from,
                to: to
            },
            fetchPolicy: 'network-only'
        }
    }
})(HistoricalTweetCountChart)
