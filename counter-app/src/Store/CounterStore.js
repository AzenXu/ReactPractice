
import dispatcher from '../Dispatcher/CounterDispatcher'
import actionType from '../Consts'
import { ReduceStore } from 'flux/utils'

class Store extends ReduceStore {
    getInitialState() {
        return 0;
    }

    reduce(count, action) {
        switch (action.type) {
            case actionType.INCREASE:
                return count + 1;

            case actionType.DECREASE:
                return count - 1;

            default:
                return count;
        }
    }
}

export default new Store(dispatcher);