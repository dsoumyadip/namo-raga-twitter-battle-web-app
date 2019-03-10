import React from 'react'
/**
 * Components
 */
import Layout from '../../components/layout'
import Section from '../../components/section'
/**
 * UI
 */
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typograph from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
/**
 * Image
 */
import ProfileImage from './profile.jpg'
/**
 * Styles
 */
const styles = theme => ({
    section: {
        paddingBottom: theme.spacing.unit * 16,
    },
    card: {},
    media: {
        height: 350
    }
})

class About extends React.Component {
    render () {
        const { classes } = this.props
        return (
            <Layout>
                <React.Fragment>
                    {
                        /**
                         * Introduction
                         */
                    }
                    <Section className={classes.section}>
                        <Grid container spacing={32} alignItems='center'>
                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.media}
                                        image={ProfileImage}
                                        title='Profile Picture'
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={8} lg={8} xl={8}>
                                <Typograph variant='h2' gutterBottom><b>{'{ Soumyadip Dutta }'}</b></Typograph>
                                <Typograph variant='h5' color='primary'>Data Scientist and Machine Learning Engineer</Typograph>
                                <Typograph variant='body1' gutterBottom>
                                    Being an engineer, I take pride in being a quick learner. Crisp deadlines and
                                    challenging tasks, make my day. I have traversed the field of electronics,
                                    moved on to the domain of data analytics and machine learning.
                                </Typograph>
                                <Typograph variant='body1'>
                                    I expect to thrive in an organisation, which helps me building a steep
                                    learning curve, without compromising on quality and ability.
                                </Typograph>
                            </Grid>
                        </Grid>
                    </Section>
                    {
                        /**
                         * Technical skills
                         */
                    }
                    <Section className={classes.section}>
                        <Typograph variant='h4' color='primary' gutterBottom><b>TECHNICAL SKILLS</b></Typograph>
                        <Divider/>
                        <br/>
                        <Grid container spacing={32}>
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Typograph variant='body1' color='primary'><b>Languages</b></Typograph>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                <Typograph variant='body1'>
                                    Python, R, Scala
                                </Typograph>
                            </Grid>
                        </Grid>
                        <Grid container spacing={32}>
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Typograph variant='body1' color='primary'><b>ML Algorithms</b></Typograph>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                <Typograph variant='body1'>
                                    Regression, Tree Based Models,
                                    Boosting, Clustering, Time Series
                                    Analysis, Recommender System
                                </Typograph>
                            </Grid>
                        </Grid>
                        <Grid container spacing={32}>
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Typograph variant='body1' color='primary'><b>Deep Learning Algorithms</b></Typograph>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                <Typograph variant='body1'>
                                    Artificial Neural Network, CNN,
                                    Sequence Modelling, Natural
                                    Language Processing
                                </Typograph>
                            </Grid>
                        </Grid>
                        <Grid container spacing={32}>
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Typograph variant='body1' color='primary'><b>Big Data Technologies</b></Typograph>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                <Typograph variant='body1'>
                                    HDFS, Spark, Kafka, Sqoop, Hive
                                </Typograph>
                            </Grid>
                        </Grid>
                        <Grid container spacing={32}>
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Typograph variant='body1' color='primary'><b>DL Frameworks</b></Typograph>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                <Typograph variant='body1'>
                                    Tensorflow, Keras, PyTorch
                                </Typograph>
                            </Grid>
                        </Grid>
                        <Grid container spacing={32}>
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Typograph variant='body1' color='primary'><b>Version Control Systems</b></Typograph>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                <Typograph variant='body1'>
                                    Git
                                </Typograph>
                            </Grid>
                        </Grid>
                        <Grid container spacing={32}>
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Typograph variant='body1' color='primary'><b>Cloud Services</b></Typograph>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                <Typograph variant='body1'>
                                    GCP, AWS, Azure
                                </Typograph>
                            </Grid>
                        </Grid>
                        <Grid container spacing={32}>
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Typograph variant='body1' color='primary'><b>Devops Tool</b></Typograph>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                <Typograph variant='body1'>
                                    Docker
                                </Typograph>
                            </Grid>
                        </Grid>
                        <Grid container spacing={32}>
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Typograph variant='body1' color='primary'><b>Data Visualization Tools</b></Typograph>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                <Typograph variant='body1'>
                                    Tableau, R Shiny
                                </Typograph>
                            </Grid>
                        </Grid>
                        <Grid container spacing={32}>
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Typograph variant='body1' color='primary'><b>Query Languages</b></Typograph>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                <Typograph variant='body1'>
                                    SQL, NoSQL
                                </Typograph>
                            </Grid>
                        </Grid>
                    </Section>
                </React.Fragment>
            </Layout>
        )
    }
}

export default withStyles(styles)(About)
