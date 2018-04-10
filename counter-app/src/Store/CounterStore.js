
import dispatcher from '../Dispatcher/CounterDispatcher'
import actionType from '../Consts'
import { addListener } from 'cluster';

let count = 0;

export default {
    getCount() {
        return count;
    },

    addListener(callBack) {

    },
    
    _dispatcherToken = dispatcher.register((action) => {
        switch (action.type) {
            case actionType.INCREASE:
                count++;
                break;

            case actionType.DECREASE:
                count--;
                break;
        
            default:
                break;
        }
    })
}