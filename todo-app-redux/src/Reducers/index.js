/** 
 * 这么写，在其他地方导入时，直接导入'../Reducers'即可
 * index.js文件比较特殊
 */

import todos from './todos'
import user from './user'

let rootReducer = {
    todos,
    user
}

export default rootReducer;