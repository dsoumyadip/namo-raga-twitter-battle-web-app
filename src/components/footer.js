import React from 'react'
import Section from './section'
/**
 * Contact form
 */
import ContactForm from './contactForm'
/**
 * UI
 */
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
/**
 * Icons
 */
import Email from '@material-ui/icons/Email'
import Phone from '@material-ui/icons/Phone'
import Location from '@material-ui/icons/LocationOn'
import { SocialIcon } from 'react-social-icons'
/**
 * Styles
 */
const styles = theme => ({
  root: {
    background: theme.palette.primary[`500`]
  },
  list: {
    [theme.breakpoints.up(`sm`)]: {
      borderLeft: `1px solid ${theme.palette.divider}`
    }
  },
  media: {
    height: `1.5rem`,
    marginTop: theme.spacing.unit * 2
  }
})

const Footer = ({ classes }) => {
  return (
    <footer className={classes.root}>
      <Section>
        <Grid container justify='center' spacing={32}>
          <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
            <ContactForm/>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <List className={classes.list}>
                <ListItem>
                    <Avatar>
                        <SocialIcon bgColor='#FFF' url='https://www.linkedin.com/in/soumyadip-dutta-7433041b/'/>
                    </Avatar>
                    <ListItemText
                        primary='LinkedIn'
                        primaryTypographyProps={{
                            variant: 'h5'
                        }}
                        secondary={<a href='https://www.linkedin.com/in/soumyadip-dutta-7433041b/' target='blank'>Soumyadip Dutta</a>}
                        secondaryTypographyProps={{
                            variant: 'subtitle1'
                        }}
                    />
                </ListItem>
                <ListItem>
                    <Avatar>
                        <SocialIcon bgColor='#FFF' url='https://github.com/sdp1992'/>
                    </Avatar>
                    <ListItemText
                        primary='Github'
                        primaryTypographyProps={{
                            variant: 'h5'
                        }}
                        secondary={<a href='https://github.com/sdp1992' target='blank'>Soumyadip Dutta</a>}
                        secondaryTypographyProps={{
                            variant: 'subtitle1'
                        }}
                    />
                </ListItem>
                <ListItem>
                    <Avatar>
                        <Email color='secondary' />
                    </Avatar>
                    <ListItemText
                        primary='Email'
                        primaryTypographyProps={{
                            variant: 'h5'
                        }}
                        secondary={<a href='mailto:soumyadipdutta2007@gmail.com'>soumyadipdutta2007@gmail.com</a>}
                        secondaryTypographyProps={{
                            variant: 'subtitle1'
                        }}
                    />
              </ListItem>
              <ListItem>
                    <Avatar>
                        <Phone color='secondary' />
                    </Avatar>
                    <ListItemText
                        primary='Phone'
                        primaryTypographyProps={{
                            variant: 'h5'
                        }}
                        secondary='+19 9903-614-919'
                        secondaryTypographyProps={{
                            variant: 'subtitle1'
                        }}
                    />
                </ListItem>
                <ListItem>
                    <Avatar>
                        <Location color='secondary' />
                    </Avatar>
                    <ListItemText
                        primary='Address'
                        primaryTypographyProps={{
                            variant: 'h5'
                        }}
                        secondary='Bengaluru, Karnataka, IN'
                        secondaryTypographyProps={{
                            variant: 'subtitle1'
                        }}
                    />
                </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Divider/>
            <br/>
            <Typography align='center' variant='caption' color='textSecondary' gutterBottom>© All rights reserved {(new Date()).getFullYear()}</Typography>
          </Grid>
        </Grid>
      </Section>
    </footer>
  )
}

export default withStyles(styles)(Footer)
