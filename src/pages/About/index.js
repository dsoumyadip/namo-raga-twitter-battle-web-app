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

class About extends React.Component {
    render () {
        return (
            <Layout>
                <Section>
                    <Typograph variant='h1'>About</Typograph>
                </Section>
            </Layout>
        )
    }
}

export default About
