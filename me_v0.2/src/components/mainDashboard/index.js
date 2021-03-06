import React, { Component } from 'react';
import { RaisedButton, Checkbox } from 'material-ui';
import HourBar from './hourBar';
import ShowList from './showList';
import style from './style.scss';
import Shows from '../../api/slideshows/dashboardData';

export default class MainDashboard extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: false,
      slideshows: Shows
    };
  }
componentDidMount() {
    $(window).trigger('resize');
    console.log('resize event fired');
}
  render() {
    console.log('MainDashboard was rendered');

    return(
    <div>
      <HourBar/>
      <br/>
      <ShowList shows={this.state.slideshows}/>
    </div>
    );
  }
}
