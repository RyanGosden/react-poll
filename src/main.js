/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';

import { AppContainer } from 'react-hot-loader';



 import PollWidget from './components/poll.widget/poll.widget';
 import NotificationWidget from './components/notification.widget/notification.widget';



  ReactDOM.render(
    <PollWidget/>,
    document.getElementById('container')
  );
  ReactDOM.render(
    <NotificationWidget/>,
    document.getElementById('container2')
  );





// Eliminates the 300ms delay between a physical tap
// and the firing of a click event on mobile browsers
// https://github.com/ftlabs/fastclick
FastClick.attach(document.body);

// Enable Hot Module Replacement (HMR)
// Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     render(App)
//   });
// }
