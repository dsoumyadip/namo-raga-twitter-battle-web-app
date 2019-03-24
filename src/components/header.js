import React from 'react'
import { Link } from 'react-router-dom'
/**
 * UI
 */
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
/**
 * Styles
 */
const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    link: {
        textDecoration: 'none'
    }
}

class Header extends React.Component {
    render () {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <AppBar position='static'>
                    <Toolbar>
                        <div className={classes.grow}>
                            <Link className={classes.link} to='/'>
                                <Button color='secondary' variant='text'><b>@ TWITTER BATTLE</b></Button>
                            </Link>
                        </div>
                        <div>
                            <Link className={classes.link} to='/'><Button color='secondary'>Home</Button></Link>
                            <Link className={classes.link} to='/history'><Button color='secondary'>Historical Data</Button></Link>
                            <Link className={classes.link} to='/about'><Button color='secondary'>About</Button></Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Header)
