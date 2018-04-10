import React, { Component } from 'react';
import Action from '../Action/CounterAction';
import Store from '../Store/CounterStore';
import { Container } from 'flux/utils';

class CounterApp extends Component {

    static getStores() {
        return [Store];
    }

    static calculateState(prevState) {
        return {
            count: Store.getState()
        };
    }

    render () {
        return (
            <div>
                <h1>{ this.state.count }</h1>
                <button onClick={ Action.increase }> + </button>
                <button onClick={ Action.decrease }> - </button>
            </div>
        )
    }
}

export default Container.create(CounterApp);