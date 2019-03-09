import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
/**
 * Data provider
 */
import DataProvider from './dataProvider'
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
import History from './pages/History'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme.Default}>
        <CssBaseline/>
        <DataProvider>
          <Router>
            <div>
              <Route exact path='/' component={routeProps => <Dashboard {...routeProps} />} />
              <Route path='/about' component={routeProps => <About {...routeProps} />} />
              <Route path='/history' component={routeProps => <History {...routeProps} />} />
            </div>
          </Router>
        </DataProvider>
      </MuiThemeProvider>
    )
  }
}

export default App
