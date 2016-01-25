import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardActions,
         FlatButton, Toggle } from 'material-ui';
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

    const styles = {
      elementStyle : {
        display: 'inline-block',
        height: 'auto',
        width: '80px',
        height: '80px',
        verticalAlign: 'text-top'
       }
    }

    return(
    <div className="row">
      <div className="large-12 columns">
      {data.showId}
        <Card>
          <CardHeader
            title="Without Avatar"
            subtitle="Subtitle" />
          <CardText>
            <div className="row">
              <div className="toggles large-3 medium-4 large-centered medium-centered columns">
                <Toggle
                  name="useInstagram"
                  value="useInstagram"
                  label="Use Instagram"
                  elementStyle={styles.elementStyle}
                  defaultToggled={true}/>

                <Toggle
                  name="useTwitter"
                  value="useTwitter"
                  label="Use Twitter"
                  elementStyle={styles.elementStyle}
                  defaultToggled={true}/>
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
      </div>
    </div>
    );
  }
}
