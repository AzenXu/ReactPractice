import dispatcher from '../Dispatcher/CounterDispatcher'
import actionType from '../Consts'

export default {
    increase() {
        dispatcher.dispatch({
            type: actionType.INCREASE
        })
    },
    decrease() {
        dispatcher.dispatch({
            type: actionType.DECREASE
        })
    }
}