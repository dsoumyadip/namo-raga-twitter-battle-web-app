import React from 'react'
/**
 * UI
 */
import Grid from '@material-ui/core/Grid'
import Layout from '../../components/layout'
import Section from '../../components/section'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
/**
 * Views
 */
import TweetCountChart from './TweetCountChart'
import PositiveNegativeCountChart from './PositiveNegativeCountChart'
/**
 * Images
 */
import Modi from './Modi.jpg'
import Rahul from './Rahul.jpg'
/**
 * Styles
 */
const styles = theme => ({
    media: {
        width: '100%'
    }
})

const Dashboard = ({ classes }) => {
    return (
        <Layout>
            <React.Fragment>
                <Section full={true}>
                    <hr/>
                    <br/>
                    <Grid container alignItems='center' justify='center' spacing='32'>
                        <Grid item xs='12' sm='4' md='4' lg='3' xl='3'>
                            <img className={classes.media} alt='Modi' src={Modi}/>
                        </Grid>
                        <Grid item xs='12' sm='2' md='2' lg='1' xl='1'>
                            <Typography variant='h2' align='center' color='textSecondary'><b>VS</b></Typography>
                        </Grid>
                        <Grid item xs='12' sm='4' md='4' lg='3' xl='3'>
                            <img className={classes.media} alt='Rahul' src={Rahul}/>
                        </Grid>
                    </Grid>
                    <br/>
                    <hr/>
                    <Typography align='center' variant='h2' color='textSecondary'><b>NAMO VS RAGA TWITTER BATTLE</b></Typography>
                    <hr/>
                </Section>
                <Section>
                    <TweetCountChart/>
                    <br/>
                    <PositiveNegativeCountChart/>
                </Section>
            </React.Fragment>
        </Layout>
    )
}

export default withStyles(styles)(Dashboard)
