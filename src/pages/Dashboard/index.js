import React from 'react'
/**
 * UI
 */
import Divider from '@material-ui/core/Divider'
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
import Modi from 'images/Modi.jpg'
import Rahul from 'images/Rahul.jpg'
import twitter from 'images/twitter.jpg'
/**
 * Icons
 */
import Mouse from '@material-ui/icons/KeyboardArrowDown'
/**
 * Styles
 */
const styles = theme => ({
    root: {
        background: `url(${twitter}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    media: {
        width: '100%'
    },
    '@keyframes bounce': {
        from: {
            transform: 'translateY(0px)'
        },
        to: {
            transform: 'translateY(-15px)'
        }
    }, 
    icon: {
        fontSize: '2rem',
        opacity: '0.8',
        animation: `bounce 1s infinite alternate ${theme.transitions.easing.easeInOut}`
    }
})

const Dashboard = ({ classes }) => {
    return (
        <Layout>
            <React.Fragment>
                <Section className={classes.root} full={true}>
                    <Divider/>
                    <br/>
                    <Grid container alignItems='center' justify='center' spacing={32}>
                        <Grid item xs={12} sm={4} md={4} lg={3} xl={3}>
                            <img className={classes.media} alt='Modi' src={Modi}/>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={1} xl={1}>
                            <Typography variant='h2' align='center'><b>VS</b></Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={3} xl={3}>
                            <img className={classes.media} alt='Rahul' src={Rahul}/>
                        </Grid>
                    </Grid>
                    <br/>
                    <br/>
                    <Divider/>
                    <Typography align='center' variant='h2' gutterBottom><b>NAMO VS RAGA TWITTER BATTLE</b></Typography>
                    <Typography align='center' variant='h5' color='textSecondary' gutterBottom>Before 2019 General Election have a look how NaMo and RaGa performing at Twitter.</Typography>
                    <Divider/>
                    <br/>
                    <Grid container alignItems='center' justify='center'>
                        <Grid item>
                            <Mouse className={classes.icon}/>
                        </Grid>
                    </Grid>
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
