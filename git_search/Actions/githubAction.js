
// import * as types from '../Constants/Types'; // 这种写法，types就是个对象，会把Types.js这个文件所有的export打包放入一个字典中
import { FIND_GITHUB_DATA } from "../Constants/Types"; // 这种写法直接用

export default {
    //  请求数据方法，异步，需要return一个函数
    findGithubData = () => {
        //  dispatcher从Store中传入，middleWare
        return (dispatch) => {

        }
    }
}
