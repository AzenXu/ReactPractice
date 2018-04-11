import React from 'react';
import ReactDOM from 'react-dom';
import TODOApp from './View/TODOApp';

import { Provider } from 'react-redux';
import store from './Store/store'

//  通过Provider把 store 和 View串联起来
ReactDOM.render(
    <Provider store={store}>
        <TODOApp />
    </Provider>
    ,
    document.getElementById('root')
);
