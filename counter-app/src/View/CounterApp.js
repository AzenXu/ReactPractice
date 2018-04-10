import React, { Component } from 'react';

class CounterApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    changeCounterValue = (value) => {
        this.setState({
            counter: this.state.counter + value
        })
    }

    render () {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={() => {
                    this.changeCounterValue(1);
                }}> + </button>
                <button onClick={() => {
                    this.changeCounterValue(-1);
                }}> - </button>
            </div>
        )
    }
}

export default CounterApp;