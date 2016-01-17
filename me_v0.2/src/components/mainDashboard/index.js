import React, { Component } from 'react';
import { RaisedButton, Checkbox } from 'material-ui';
import HourBar from './hourBar';
import ShowList from './showList';
import style from './style.scss';
import Breadcrumbs from 'react-breadcrumbs'

export default class MainDashboard extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: false,
      slideshows: {}
    };
  }
componentDidMount() {
    $(window).trigger('resize');
    console.log('resize event fired')
}
  render() {
    console.log('MainDashboard was rendered');
    return(
    <div>
      <Breadcrumbs routes={this.props.routes} params={this.props.params}/>
      <HourBar/>
      <br/>
      <ShowList/>
    </div>
    );
  }
}
