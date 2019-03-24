import React from 'react'
/**
 * Theme provider
 */
import { MuiThemeProvider } from '@material-ui/core/styles'
/**
 * Theme
 */
import theme from 'theme'
/**
 * UI
 */
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import Section from './section'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import withTheme from '@material-ui/core/styles/withTheme'
/**
 * Icons
 */
import Email from '@material-ui/icons/Email'
import Phone from '@material-ui/icons/Phone'
import Location from '@material-ui/icons/LocationOn'
import { SocialIcon } from 'react-social-icons'
/**
 * Image
 */
import avatar from 'images/avatar.png'
/**
 * Styles
 */
const styles = theme => ({
  root: {
    background: theme.palette.primary.dark
  },
  list: {
    [theme.breakpoints.up(`sm`)]: {
      borderLeft: `1px solid ${theme.palette.divider}`
    }
  },
  media: {
    width: '100%'
  }
})

const Footer = ({ classes, theme: themeObj }) => {
  return (
    <Paper className={classes.root} component='footer'>
      <MuiThemeProvider theme={theme.Dark}>
        <Section>
          <Grid container justify='center' spacing={32}>
            <Grid container alignItems='center' item xs={12} sm={12} md={7} lg={7} xl={7}>
              <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
                <img className={classes.media} alt='avatar' src={avatar}/>
              </Grid>
              <Grid container item xs={12} sm={12} md={8} lg={9} xl={9} spacing={8}>
                <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                  <img className={classes.media} alt='avatar' src={avatar}/>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                  <img className={classes.media} alt='avatar' src={avatar}/>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                  <img className={classes.media} alt='avatar' src={avatar}/>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                  <img className={classes.media} alt='avatar' src={avatar}/>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                  <img className={classes.media} alt='avatar' src={avatar}/>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                  <img className={classes.media} alt='avatar' src={avatar}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <List className={classes.list}>
                <ListItem>
                  <Avatar>
                    <SocialIcon bgColor={themeObj.palette.grey['600']} fgColor={themeObj.palette.grey['900']} url='https://www.linkedin.com/in/soumyadip-dutta-7433041b/'/>
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
                      <SocialIcon bgColor={themeObj.palette.grey['600']} fgColor={themeObj.palette.grey['900']} url='https://github.com/sdp1992'/>
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
                      <Email/>
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
                    <Phone/>
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
                      <Location/>
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
      </MuiThemeProvider>
    </Paper>
  )
}

export default withTheme()(withStyles(styles)(Footer))
