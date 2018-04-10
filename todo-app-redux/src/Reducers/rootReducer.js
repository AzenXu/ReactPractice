/** 
 * 总Reducer，用来汇总其他Reducer的
 */

 import todos from './todos'
 import user from './user'

 let rootReducer = {
     todos,
     user
 }

 export default rootReducer;