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
import { LineChart } from 'react-easy-chart'

class TweetCountChart extends React.Component {
    state = {
        data: []
    }

    componentDidMount () {
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
                  limit: 10
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
        const raga = data.map(item => ({
            x: moment(ObjectID(item._id).getTimestamp()).format('h:mm:ss a'),
            y: item.raga_count
        }))

        const namo = data.map(item => ({
            x: moment(ObjectID(item._id).getTimestamp()).format('h:mm:ss a'),
            y: item.namo_count
        }))

        return [namo, raga]
    }

    render() {
        const {
            data
        } = this.state

        return ( 
            <div>
                <LineChart
                    style={{ '.label': { fill: 'white' } }}
                    axes
                    grid
                    xType={'text'}
                    xTicks={10}
                    yTicks={10}
                    height={300}
                    width={800}
                    lineColors={['pink', 'cyan']}
                    axisLabels={{x: 'Timestamp', y: 'Tweet Count'}}
                    interpolate={'cardinal'}
                    data={data}
                />
            </div>
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
