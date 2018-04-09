import React, { Component } from 'react';
import TODOItem from './TODOItem';
import propTypes from 'prop-types';

class TODOList extends Component {

    static get defaultProps () {
        return {
            items: [],
            toggleItemList: () => {},
            deleteItemList: () => { }
        }
    }

    static propTypes = {
        items: propTypes.array.isRequired,
        toggleItemList: propTypes.func.isRequired,
        deleteItemList: propTypes.func.isRequired
    }

    render() {
        return (
            <ul>
                { this.props.items.map( (item)=> {
                    return <TODOItem title={item.title} isChecked={item.checked} key={item.id} id={item.id} toggleItem={(ID)=>{
                        console.log(ID);
                        this.props.toggleItemList(ID);
                    }} deleteItem={(ID) => {
                        this.props.deleteItemList(ID);
                    }} />
                }) }
            </ul>
        )
    }
}

export default TODOList;