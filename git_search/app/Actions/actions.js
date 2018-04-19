
import { ActionType } from "../Consts";

export default {
    fetchSearchResult(key) {
        return (dispatcher) => {
            fetch(api.search + e.nativeEvent.text)
                .then((data) => data.json())
                .then((jsonData) => {
                    dispatcher({
                        type: ActionType.LOAD_DATA,
                        results: this._generageItems(jsonData)
                    })
                })
                .catch((e) => {
                    console.log('数据请求失败');
                }).done()
        }
    },
}

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