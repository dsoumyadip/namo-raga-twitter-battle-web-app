import React from 'react'
/**
 * Components
 */
import Layout from '../../components/layout'
import Section from '../../components/section'
/**
 * UI
 */
import Typograph from '@material-ui/core/Typography'
/**
 * Views
 */
import TweetCountChart from './TweetCountChart'

class Dashboard extends React.Component {
    render () {
        return (
            <Layout>
                <Section>
                    <Typograph variant='h1'>Dashboard</Typograph>
                    <TweetCountChart/>
                </Section>
            </Layout>
        )
    }
}

export default Dashboard
