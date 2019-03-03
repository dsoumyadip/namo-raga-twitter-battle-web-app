import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
/**
 * Theme provider
 */
import { MuiThemeProvider } from '@material-ui/core/styles'
/**
 * Themes
 */
import theme from './theme'
/**
 * Css baseline
 */
import CssBaseline from '@material-ui/core/CssBaseline'
/**
 * Pages
 */
import About from './pages/About'
import Dashboard from './pages/Dashboard'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme.Default}>
        <CssBaseline/>
        <Router>
          <div>
            <Route exact path='/' component={routeProps => <Dashboard {...routeProps} />} />
            <Route path='/about' component={routeProps => <About {...routeProps} />} />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
