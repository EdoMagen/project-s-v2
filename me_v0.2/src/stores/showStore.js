import alt from '../alt';
import Actions from '../actions';
// import {decorate, bind, datasource} from 'alt/utils/decorators';
// import ChannelSource from '../sources/ChannelSource';
// import MessageSource from '../sources/MessageSource';
import _ from 'lodash';



class ShowStore {
  constructor() {
    this.Shows = [];

    this.bindListeners({
      handleUpdateShows: Actions.UPDATE_SHOWS
    });
  }

  handleUpdateShows(Shows) {
    this.Shows = Shows;
  }
}

module.exports = alt.createStore(ShowStore, 'ShowStore');
