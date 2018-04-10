import { Dispatcher } from 'flux'

let CounterDispatcher = new Dispatcher();

// export default new Dispatcher(); - 和下面等效
export default CounterDispatcher; // 名字只是一个指针，外面引用的时候不用必须和这个名字一致