import React from 'react';
import Sorting from '../sorting'
import Items from '../items'
import './list.css';

const LeftSide = ({
        id,
        list, 
        uploadedItems, 
        searchInput,
        onChangeSearchInput,
        checkboxStatus, 
        changeCheckbox, 
        selectItem,
        selectedItem,
        removeItem,
        addItem
    }) => {

        return (
            <div className="list">
                <Sorting 
                    list={list} 
                    uploadedItems={uploadedItems} 
                    searchInput={searchInput} 
                    onChangeSearchInput = {onChangeSearchInput}
                    checkboxStatus={checkboxStatus}
                    changeCheckbox={changeCheckbox}
                />

                {(list.length > 0) ? (
                    <Items 
                        id={id}
                        list={list} 
                        uploadedItems={uploadedItems} 
                        removeItem={removeItem}
                        selectItem={selectItem} 
                        selectedItem={selectedItem}
                        addItem={addItem}
                    />
                ) : ''}
            </div>
        )
    }

export default LeftSide;