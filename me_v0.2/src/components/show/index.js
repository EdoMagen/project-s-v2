import React, { Component } from 'react';
import style from './style.scss';
import Show from '../../api/slideshows/liveshowData';

export default class show extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: false,
      showId: props.params.showId, // taken from the router
    };
  }

  componentDidMount() {
    $(window).trigger('resize');
    console.log('resize event fired');
    console.log(Show);
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
