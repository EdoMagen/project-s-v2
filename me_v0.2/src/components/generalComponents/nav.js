import React, { Component } from 'react';
import { AppBar, IconButton, IconMenu, MenuItem } from 'material-ui'

export default class Nav extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  _handleClick() {
    cosole.log('clicked')
  }

  render() {

    return(
		<nav>
      <AppBar title='SwanScreen'
        iconElementLeft={ <span/>}
        iconElementRight={
        <IconMenu
          iconButtonElement={<IconButton iconClassName="icon icon-dots-three-vertical"/>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}>
            <MenuItem primaryText="Send feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>}
        />
		</nav>
    );
  }
}
