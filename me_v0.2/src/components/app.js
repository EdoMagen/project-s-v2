// import dependencies
import React, { Component } from 'react'
import {render} from 'react-dom'

// Import components to render in App
import Routes from '../routes'
import Header from './generalComponents/header'
import Footer from './generalComponents/footer'
import Breadcrumbs from 'react-breadcrumbs'

// Routing
import { IndexRoute, Router, Route, Link } from 'react-router'

// Import Material-UI
import theme from '../styles/material-theme/theme'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();
/* is this even needed?
  React.initializeTouchEvents(true)
*/

// App
export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentRoute : "Dashboard"
    };
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(theme),
    };
  }

  render () {
    return (
      <div id="page-wrapper" className="page-wrapper">
        <Header currentRoute={this.state.currentRoute} />
        <Breadcrumbs routes={this.props.routes} params={this.props.params} />
        <div id="currentScreen">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

// For Material-UI
App.childContextTypes = {
    muiTheme: React.PropTypes.object
};
