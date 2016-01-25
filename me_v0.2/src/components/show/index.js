import React, { Component } from 'react';
//import { RaisedButton, Checkbox } from 'material-ui';
import style from './style.scss';

export default class show extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: false,
      showId: props.params.showId
    };
  }

  componentDidMount() {
    $(window).trigger('resize');
    console.log('resize event fired');
  }

  render() {
    console.log('Show was rendered');
    let data = this.state;
    return(
    <div>
        welcome to the show page for slide {data.showId}
    </div>
    );
  }
}
