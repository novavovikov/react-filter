import React from 'react';
import Filter from '../filter'
import Items from '../items'
import './list.css';

const RightSide = ({
        id,
        list, 
        selectItem,
        selectedItem,
        buttons,
        updateButton
    }) => {
        return (
            <div className="list">
                <Filter 
                    buttons={buttons}
                    updateButton={updateButton}
                />

                {(list.length > 0) ? (
                    <Items 
                        id={id}
                        list={list} 
                        selectItem={selectItem}
                        selectedItem={selectedItem}
                    />
                ) : ''}
            </div>
        )
    }

export default RightSide;