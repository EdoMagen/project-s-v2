import React, { Component } from 'react';
import { RaisedButton, Checkbox } from 'material-ui';
import style from './style.scss';

export default class showEditor extends Component {
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
    console.log('ShowEditor was rendered');
     let data = this.state;
    return(
    <div>
        {data.showId}
    </div>
    );
  }
}
