
// import * as types from '../Constants/Types'; // 这种写法，types就是个对象，会把Types.js这个文件所有的export打包放入一个字典中
import { FIND_GITHUB_DATA } from "../Constants/Types"; // 这种写法直接用
import api from '../Constants/Api';

_generageItems = (items) => {
    let results = [];
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        results.push({
            headerImage: element.owner.avatar_url,
            login: element.owner.login,
            type: element.owner.type
        })
    }
    return results;
}

export default (key) => {
    //  dispatcher从Store中传入，middleWare
    return (dispatch) => {
        fetch(api.search + key)
            .then((data) => data.json())
            .then((jsonData) => {
                dispatch({
                    type: FIND_GITHUB_DATA,
                    items: this._generageItems(jsonData.items)
                });
            })
            .catch((e) => {
                console.log('数据请求失败');
            }).done()
    }
};
