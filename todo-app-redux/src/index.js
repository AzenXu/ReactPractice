import React from 'react';
import ReactDOM from 'react-dom';
import TODOApp from './View/TODOApp';

import { Provider } from 'react-redux';
import store from './Store'

ReactDOM.render(
    <Provider store={store}>
        <TODOApp />
    </Provider>
    ,
    document.getElementById('root')
);
