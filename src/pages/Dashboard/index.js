import React from 'react'
/**
 * Components
 */
import Layout from '../../components/layout'
import Section from '../../components/section'
/**
 * UI
 */
/**
 * Views
 */
import TweetCountChart from './TweetCountChart'
import PositiveNegativeCountChart from './PositiveNegativeCountChart'

class Dashboard extends React.Component {
    render () {
        return (
            <Layout>
                <Section>
                    <TweetCountChart/>
                    <br/>
                    <PositiveNegativeCountChart/>
                </Section>
            </Layout>
        )
    }
}

export default Dashboard
