
import dispatcher from '../Dispatcher/CounterDispatcher'
import actionType from '../Consts'

let count = 0;
var changeHandler = () => {};

export default {
    getCount() {
        return count;
    },

    addListener(stateChangedHandler) {
        changeHandler = stateChangedHandler;
    },
    
    _dispatcherToken: dispatcher.register((action) => {
        console.log(action.type);
        
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
        changeHandler();
    })
}