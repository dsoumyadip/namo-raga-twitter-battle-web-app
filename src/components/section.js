import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
/**
 * Styles
 */
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    overflowX: 'hidden'
  },
  rootFull: {
    overflowX: 'hidden',
    minHeight: 'calc(100vh - 64px)',
    display: 'flex',
    alignItems: 'center'
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
  const { classes, className, children, full, name } = props
  return (
    <section className={classNames(full ? classes.rootFull : classes.root, className)}>
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
