import React from 'react'
import PropTypes from 'prop-types'
/**
 * Styles
 */
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    overflowX: 'hidden'
  },
  content: {
    margin: '0 auto',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4
  }
})

const Section = (props) => {
  const { classes, children, name } = props
  return (
    <section className={classes.root}>
      <div id={name} name={name} className={classes.content}>
        {children}
      </div>
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired
}

export default withStyles(styles)(Section)
