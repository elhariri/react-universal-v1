import React from 'react';
import ReactDOM from 'react-dom';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router, browserHistory  } from 'react-router-dom';

import App from '../shared/app';

if(typeof window !== 'undefined') {
hydrate(<Router history={browserHistory }><App/></Router>, document.getElementById('app'))
}