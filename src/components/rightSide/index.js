import React from 'react';
import Filter from '../filter'
import Items from '../items'
import './list.css';

const RightSide = ({
        id,
        list, 
        addItem,
        selectItem,
        selectedItem,
        buttons,
        updateButton,
        uploadedItems,
        removeItem,
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
                        uploadedItems={uploadedItems} 
                        selectItem={selectItem}
                        selectedItem={selectedItem}
                        removeItem={removeItem}
                        addItem={addItem}
                    />
                ) : ''}
            </div>
        )
    }

export default RightSide;