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

class Dashboard extends React.Component {
    render () {
        return (
            <Layout>
                <Section>
                    <TweetCountChart/>
                </Section>
            </Layout>
        )
    }
}

export default Dashboard
