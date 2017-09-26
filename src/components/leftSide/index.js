import React from 'react';
import Sorting from '../sorting'
import Items from '../items'
import './list.css';

const LeftSide = ({
        list, 
        uploadedItems, 
        onFindItems, 
        checkboxStatus, 
        changeCheckbox, 
        selectItem
    }) => {
        return (
            <div className="list">
                <Sorting 
                    onFindItems={onFindItems} 
                    uploadedItems={uploadedItems} 
                    list={list} 
                    checkboxStatus={checkboxStatus}
                    changeCheckbox={changeCheckbox}
                />

                {(list.length > 0) ? (
                    <Items 
                        list={list} 
                        selectItem={selectItem} 
                    />
                ) : ''}
            </div>
        )
    }

export default LeftSide;