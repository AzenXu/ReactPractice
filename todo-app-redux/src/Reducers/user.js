
/** 
 * 第二个Reducer
 * 用来示例多个Reducer的，项目中用不到
 * 可以看到，这个Reducer也是一个箭头函数
 */

export default (state=0, action={}) => {
    return state + 1;
}