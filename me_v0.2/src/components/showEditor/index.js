import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardActions,
         FlatButton, Toggle, Snackbar } from 'material-ui';
import style from './style.scss';
import Shows from '../../api/slideshows/dashboardData';

export default class showEditor extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: false,
      showId: props.params.showId,
      currentShow:null,
      shouldUseInstagram: true,
      shouldUseTwitter: true,
      snackbarOpen: false,
      snackbarMessage: 'Please use at least 1 social network :)'
    };

  }

  componentDidMount() {
    $(window).trigger('resize');
    console.log('resize event fired');
    console.log(Shows);

    // WHY ARENT THESE WORKING???
    this.getShow = this.getShow.bind(this);
    this.initScreen = this.initScreen.bind(this);
    this._handleToggle = this._handleToggle.bind(this);
    //debugger;

    this.getShow();
    this.initScreen();
  }

  initScreen() {
    // Assumes that currentShow already exists
    this.refs.instagramToggle.setToggled(this.state.currentShow.use_instagram);
    this.refs.twitterToggle.setToggled(this.state.currentShow.use_twitter);

    this.setState({
                    shouldUseInstagram: this.state.currentShow.use_instagram,
                    shouldUseTwitter: this.state.currentShow.use_twitter
                  });

    // ... continue to init layouts according to currentShow
  }

  getShow() {
    //TODO: This should do an ajax call to the api handler and get the show by id

    if (this.state.showId) {
      // Get the shows (from showData.js at the moment)
      this.state.shows = Shows;

      // Set the current show according to parameter
      for (var i = 0; i < this.state.shows.shows.length; i++) {
        if (this.state.shows.shows[i].id == this.state.showId) {
          // Insert show into the state and initiate layout
            // -> Cannot use setState since it just queues the state change
            // -> and we need it ready at load time.
            // this.setState({currentShow: this.state.shows.shows[i]});
          this.state.currentShow = this.state.shows.shows[i];
        }
      }
    }
    else {
      this.state.currentShow = {
  			id: "",
  			hashtag: "",
        use_instagram: true,
        use_twitter: true,
  			headerImage: "/dist/default.jpg",
  			bgImage: "/dist/default.jpg",
  			customText: "Tag your instagram posts with <span class='hashtag'>#hashtag</span> to add them to the slideshow",
  			styleId: "00001",
  			tweetCount: 0,
  			videoCount: 0,
  			photoCount: 0,
  			slides: {
  				twitter: [],
  				instagram: []
  			},
  			blockedUsers: {
  				twitter: [],
  				instagram: []
  			},
  			blockedItems: {
  				twitter: [],
  				instagram: []
  			}
  		}
    }
  }

  _handleToggle(item) {
    //debugger;
    if(item =="instagram") {
      this.setState({shouldUseInstagram: this.refs.instagramToggle.isToggled()})
    }

    if(item =="twitter") {
      this.setState({shouldUseTwitter: this.refs.twitterToggle.isToggled()})
    }

    // Force at least 1 social network
    setTimeout(
      () => {
            if(!this.state.shouldUseInstagram && !this.state.shoulduse_twitter) {
              this.refs.instagramToggle.setToggled(true);
              this.setState({
                              shouldUseInstagram: true,
                              snackbarOpen: true
                            })
            }
          },300);
  }

  _handleRequestClose() {
    this.setState({snackbarOpen: false})
  }

  render() {
    console.log('ShowEditor was rendered');
    let data = this.state;
    let show = this.state.currentShow;

    return(
    <div className="row">
      <div className="large-12 columns">
      {data.showId}
        <Card>
          <CardHeader
            title={show.hashtag}
            subtitle="Subtitle" />
          <CardText>
            <div className="row">
              <div className="toggles large-3 medium-4 large-centered medium-centered columns">
                <Toggle
                  ref="instagramToggle"
                  name="instagramToggle"
                  value="instagramToggle"
                  label="Use Instagram"
                  defaultToggled={true}
                  onToggle={this._handleToggle.bind(this, "instagram")}
                />
                <Toggle
                  ref="twitterToggle"
                  name="twitterToggle"
                  value="twitterToggle"
                  label="Use Twitter"
                  defaultToggled={true}
                  onToggle={this._handleToggle.bind(this, "twitter")}
                />
              </div>
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </p>
          </CardText>
          <CardActions>
            <FlatButton label="Action1"/>
            <FlatButton label="Action2"/>
          </CardActions>
        </Card>

        <Snackbar
          open={this.state.snackbarOpen}
          message={this.state.snackbarMessage}
          action="close"
          autoHideDuration={7500}
          bodyStyle={{borderTop:"2px solid #1a93e0", boxShadow:"0 -10px -100px #5F5F5F"}}
          onActionTouchTap={this._handleRequestClose.bind(this)}
          onRequestClose={this._handleRequestClose.bind(this)}
          />
      </div>
    </div>
    );
  }
}
