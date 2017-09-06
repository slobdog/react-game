import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import configureStore from './store';
import history from './history';
import registerServiceWorker from './utils/registerServiceWorker';
import App from './views/app';


const store = configureStore();
const rootElement = document.getElementById('root');

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Component/>
        </div>
      </ConnectedRouter>
    </Provider>,
    rootElement
  )
}


if (module.hot) {
  module.hot.accept('./views/app', () => {
    render(require('./views/app').default);
  })
}

registerServiceWorker();

render(App);
