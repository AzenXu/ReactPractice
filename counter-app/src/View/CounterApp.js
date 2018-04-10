import React, { Component } from 'react';
import Action from '../Action/CounterAction';
import Store from '../Store/CounterStore';

class CounterApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count:Store.getState()
        };
    }

    componentDidMount() {
        this.listener = Store.addListener(()=>{
            this.setState({
                count: Store.getState()
            })
        })
    }

    componentWillUnmount() {
        this.listener();
    }

    render () {
        return (
            <div>
                <h1>{ Store.getState() }</h1>
                <button onClick={ Action.increase }> + </button>
                <button onClick={ Action.decrease }> - </button>
            </div>
        )
    }
}

export default CounterApp;