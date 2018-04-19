import App from './App';
import { Provider } from "react-redux";
import React, { Component } from 'react';
import { 
    View
 } from 'react-native';

export default class root extends Component {
    render() {
        return (
            <Provider>
                <App />
            </Provider>
        )
    }
}