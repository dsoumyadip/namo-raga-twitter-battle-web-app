import React from 'react'
import moment from 'moment'
import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider, InlineDateTimePicker } from 'material-ui-pickers'
/**
 * Components
 */
import Layout from '../../components/layout'
import Section from '../../components/section'
/**
 * UI
 */
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
/**
 * Views
 */
import TweetCount from './HistoricalTweetCountChart'
/**
 * Styles
 */
const styles = theme => ({
    paper: {
        background: theme.palette.secondary.main,
        padding: theme.spacing.unit * 4
    }
})

class History extends React.Component {
    state = {
        from: moment().subtract(1, 'day').format(),
        to: moment().format()
    }

    handleDateChange = (key, value) => {
        this.setState({
            [key]: moment(value).format()
        })
    }

    render () {
        const { classes } = this.props
        const { from, to } = this.state
        return (
            <Layout>
                <Section>
                    <Typography variant='h2' color='secondary' gutterBottom><b>Search Historical Data By Date and Time</b></Typography>
                    <Divider/>
                    <br/>
                    <Paper className={classes.paper}>
                        <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
                            <Grid container alignItems='center' justify='center' spacing={32}>
                                <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                                    <InlineDateTimePicker
                                        keyboard
                                        ampm={true}
                                        format='MM:DD:YY h:mm:ss a'
                                        label='Harvested from'
                                        maxDate={to}
                                        value={from}
                                        onChange={this.handleDateChange.bind(this, 'from')}
                                        onError={console.log}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                                    <InlineDateTimePicker
                                        keyboard
                                        ampm={true}
                                        format='MM:DD:YY h:mm:ss a'
                                        label='Harvested to'
                                        minDate={from}
                                        value={to}
                                        onChange={this.handleDateChange.bind(this, 'to')}
                                        onError={console.log}
                                    />
                                </Grid>
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </Paper>
                    <br/>
                    <TweetCount from={from} to={to} />
                </Section>
            </Layout>
        )
    }
}

export default withStyles(styles)(History)
