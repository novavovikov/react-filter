import React from 'react';
import Filter from '../filter'
import Items from '../items'
import './list.css';

const RightSide = ({
        list, 
        selectItem,
        selectedItem
    }) => {
        return (
            <div className="list">
                <Filter />

                {(list.length > 0) ? (
                    <Items 
                        list={list} 
                        selectItem={selectItem}
                        selectedItem={selectedItem}
                    />
                ) : ''}
            </div>
        )
    }

export default RightSide;