import React, { Component } from 'react'
import {render} from 'react-dom'
import promise from 'es6-promise'
promise.polyfill();

// Import global styles
import icons from './styles/main/icons.scss'
import style from './styles/main/style.scss'

// Import dependencies
import Fetch from './utils/fetch/fetch'

// Import API handlers
import RegFormApi from './api/reg-form-api'
import LocationApi from './api/location-api'
import LanguageApi from './api/language-api'
import ConfigApi from './api/config-api'

// Import components to render in App
//import App from './components/app'
import Routes from './routes';

// Render app
render(<Routes/>, document.getElementById('root'))




//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Import main js file
/*
import RegForm from './components/registration-form/reg-form';
*/

// Init app
/*
initGlobalConfiguration()
 .then(getRegFormData)
 .then(initLanguage)
 .then(renderForm);
*/
////////////////////////
/*
function renderForm() {
  document.getElementsByTagName('body')[0].className+=` direction-${LanguageApi.info.direction}`;
  return render(<RegForm formData={RegFormApi.data} />, document.getElementById('root'));
}

function initGlobalConfiguration() {
  return ConfigApi.init()
    .then(()=> {
      return Fetch.init({
        apiPrefix: ConfigApi.global.apiPrefix
      });
    });
}

function initLanguage(regFormData) {
  let lanaguageInfo = regFormData.lang || {};
  return LanguageApi.init(lanaguageInfo);
}

function getRegFormData() {
  return RegFormApi.getRegFormData();
}
*/

/////////////////////////////////////////////////////////////////////////////////
