
import dispatcher from '../Dispatcher/CounterDispatcher'
import actionType from '../Consts'
import EventEmitter from 'events'

let count = 0;
// var changeHandler = () => {};

const kStateChangeNotification = "kStateChangeNotification";
const _notificationCenter = new EventEmitter();

export default {

    getCount() {
        return count;
    },

    addListener(stateChangedHandler) {
        // changeHandler = stateChangedHandler;
        _notificationCenter.on(kStateChangeNotification, stateChangedHandler)
        return () => _notificationCenter.removeAllListeners(kStateChangeNotification, stateChangedHandler)
    },
    
    _dispatcherToken: dispatcher.register((action) => {
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
        _notificationCenter.emit(kStateChangeNotification);
        // changeHandler();
    })
}