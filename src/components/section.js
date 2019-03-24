import React from 'react'
import PropTypes from 'prop-types'
/**
 * Styles
 */
import { withStyles } from '@material-ui/core/styles'
/**
 * Image
 */
import twitter from './twitter.jpg'

const styles = theme => ({
  root: {
    overflowX: 'hidden'
  },
  rootFull: {
    overflowX: 'hidden',
    minHeight: 'calc(100vh - 64px)',
    display: 'flex',
    alignItems: 'center',
    background: `url(${twitter}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  content: {
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      maxWidth: '90%'
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1200px'
    },
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 8,
    [theme.breakpoints.up('xl')]: {
      paddingTop: theme.spacing.unit * 16,
      paddingBottom: theme.spacing.unit * 16
    }
  }
})

const Section = (props) => {
  const { classes, children, full, name } = props
  return (
    <section className={full ? classes.rootFull : classes.root}>
      <div id={name} name={name} className={classes.content}>
        {children}
      </div>
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  full: PropTypes.bool
}

Section.defaultProps = {
  full: false
}

export default withStyles(styles)(Section)
