import React, { Component } from 'react';
import { RaisedButton, FontIcon } from 'material-ui';
import Breadcrumbs from 'react-breadcrumbs'
import style from './style.scss';

export default class printMaterials extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: false,
      id: props.params.showId
    };
  }

  componentDidMount() {
    // from the path `/print/:id`
    const showId = this.state.id
    $(window).trigger('resize');
    console.log('resize event fired');
  }

  previewTemplate(templateId, showId) {
    console.log('preview template: ' + id)
  }

  downloadTemplate(templateId, showId) {
    console.log('download template: ' + id)
  }

  render() {
    //debugger;
    console.log('printMaterials was rendered');
    return(
      <div className="row printmaterials-wrapper large-centered" data-equalizer>
        <Breadcrumbs routes={this.props.routes} params={this.props.params}/>
        <h1>Choose template</h1>
      	<div className="large-4 medium-4 columns print-table">
          <ul className="print-table-ul">
            <li className="title">A4 Flyer</li>
            <li className="size">29.7cm X 21cm</li>
            <li className="description">Great to hand out at concerts, galleries and conventions</li>
            <li className="bullet image"><img src="http://lorempixel.com/200/200/"/></li>
            <li className="secondary-cta">
              <RaisedButton linkButton={true} href="#"
                            secondary={true} label="Preview" labelPosition="after">
              </RaisedButton>
            </li>
              <li className="cta">
                <RaisedButton linkButton={true} href="#"
                              primary={true} label="Download" labelPosition="after">
                </RaisedButton>
              </li>
            </ul>
      	</div>
        <div className="large-4 medium-4 columns print-table">
          <ul className="print-table-ul">
            <li className="title">Business Card</li>
            <li className="size">5.1cm X 8.9cm</li>
            <li className="description">Keep a stack at a store or front desk</li>
            <li className="bullet image"><img src="http://lorempixel.com/200/200/"/></li>
            <li className="secondary-cta">
              <RaisedButton linkButton={true} href="#"
                            secondary={true} label="Preview" labelPosition="after">
              </RaisedButton>
            </li>
              <li className="cta">
                <RaisedButton linkButton={true} href="#"
                              primary={true} label="Download" labelPosition="after">
                </RaisedButton>
              </li>
            </ul>
      	</div>
        <div className="large-4 medium-4 columns print-table">
          <ul className="print-table-ul">
            <li className="title">Place Card</li>
            <li className="size">5.1cm X 8.9cm folded</li>
            <li className="description">Fantastic for seated events, like weddings</li>
            <li className="bullet image"><img src="http://lorempixel.com/200/200/"/></li>
            <li className="secondary-cta">
              <RaisedButton linkButton={true} href="#"
                            secondary={true} label="Preview" labelPosition="after">
              </RaisedButton>
            </li>
              <li className="cta">
                <RaisedButton linkButton={true} href="#"
                              primary={true} label="Download" labelPosition="after">
                </RaisedButton>
              </li>
            </ul>
        </div>
      </div>
    );
  }
}

/*
  When we have more than 3 elements we might need to equalize their height
*/
//------------------------------------------------------------------------
// $(window).bind("load", function() {
//        equalize();
//        function equalize() {
//          var maxHeight = Math.max.apply(null, $(".print-table-ul").map(function (){
//              return $(this).height();
//          }).get());
//
//          $('.print-table-ul').each(function() {
//            $(this).height(maxHeight);
//          });
//        }
//        $(window)
//                .scroll(equalize)
//                .resize(equalize)
// });
//------------------------------------------------------------------------
