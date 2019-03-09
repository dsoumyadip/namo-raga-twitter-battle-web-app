import React from 'react'
/**
 * UI
 */
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import TextField from '@material-ui/core/TextField'
import withStyles from '@material-ui/core/styles/withStyles'
/**
 * Icons
 */
import CloseIcon from '@material-ui/icons/Close'
/**
 * Styles
 */
const styles = theme => ({
  root: {},
  progress: {
    marginLeft: theme.spacing.unit
  },
  close: {
    padding: theme.spacing.unit / 2
  }
})

class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    sending: false,
    showMessage: false,
    showErrorMessage: false
  }

  clear = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      sending: false
    })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleClose = () => {
    this.setState({ showMessage: false, showErrorMessage: false })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // const { name, email, message } = this.state
  }

  render () {
    const { classes } = this.props
    return (
      <form className={classes.root} id='contact' onSubmit={this.handleSubmit}>
        <Grid container spacing={32}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              autoComplete='name'
              disabled={this.state.sending}
              fullWidth
              id='contact-name'
              label='Name'
              margin='normal'
              name='name'
              onChange={this.handleChange('name')}
              required
              type='text'
              value={this.state.name}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              autoComplete='email'
              disabled={this.state.sending}
              fullWidth
              id='contact-email'
              label='Email'
              margin='normal'
              name='email'
              onChange={this.handleChange('email')}
              required
              type='email'
              value={this.state.email}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <br/>
            <TextField
              disabled={this.state.sending}
              fullWidth
              id='contact-message'
              InputLabelProps={{
                shrink: true
              }}
              label='Message'
              margin='normal'
              multiline
              onChange={this.handleChange('message')}
              placeholder='Message'
              required
              rows='5'
              rowsMax='10'
              style={{ marginTop: 32 }}
              value={this.state.message}
              variant='outlined'
            />
          </Grid>
        </Grid>
        <br/>
        <Button disabled={this.state.sending} size='large' type='submit' variant='outlined' >
          { this.state.sending ? `sending message` : `send message` }
          { this.state.sending && <CircularProgress size={20} className={classes.progress} color='secondary' /> }
        </Button>
        {' '}
        <Button disabled={this.state.sending} onClick={this.clear} size='large' variant='outlined' >clear</Button>

        <Snackbar
          action={[
            <IconButton
              key='close'
              aria-label='Close'
              color='inherit'
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          autoHideDuration={3000}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id='message-id'>Request sent successfully</span>}
          onClose={this.handleClose}
          open={this.state.showMessage}
        />
        <Snackbar
          action={[
            <IconButton
              key='close'
              aria-label='Close'
              color='inherit'
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          autoHideDuration={3000}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id='message-id'>Sending request failed. Please try again later</span>}
          onClose={this.handleClose}
          open={this.state.showErrorMessage}
        />
      </form>
    )
  }
}

export default withStyles(styles)(ContactForm)
