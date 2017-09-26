import React from 'react';
import Filter from '../filter'
import Items from '../items'
import './list.css';

const RightSide = ({
        list, 
        selectItem
    }) => {
        return (
            <div className="list">
                <Filter />

                {(list.length > 0) ? (
                    <Items 
                        list={list} 
                        selectItem={selectItem}
                    />
                ) : ''}
            </div>
        )
    }

export default RightSide;