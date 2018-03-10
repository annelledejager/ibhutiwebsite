import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './ts/App';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import axios from 'axios';
import * as Cookies from 'js-cookie';

axios.defaults.headers.post['X-CSRFToken'] = Cookies.get('csrftoken');

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
