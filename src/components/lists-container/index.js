import React from 'react'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import LeftSide from '../leftSide'
import RightSide from '../rightSide'
import PreviewItem from '../previewItem'

import './lists.css';

const ListsContainer = ({
    leftList,
    rightList,
    uploadedLeftItems,
    uploadedRightItems,
    searchInput,
    onChangeSearchInput,
    checkboxStatus,
    changeCheckbox,
    selectItem,
    selectedItem,
    filterButtons,
    updateFilterButton,
    removeLeftItem,
    removeRightItem,
    addItemInRightSide,
    addItemInLeftSide,
}) => {
    return (
        <div className="lists">
            <LeftSide   
                id={1}
                list = { leftList }
                uploadedItems = { uploadedLeftItems }
                searchInput = { searchInput }
                onChangeSearchInput = {onChangeSearchInput}
                checkboxStatus = { checkboxStatus }
                changeCheckbox = { changeCheckbox }
                selectItem = { selectItem }
                selectedItem = { selectedItem }
                removeItem = {removeLeftItem}
                addItem = {addItemInLeftSide}
            />
            
            {(selectedItem === null) ? '' :
                <PreviewItem
                    selectedItem = { selectedItem }
                />
            }

            <RightSide 
                id={2}
                list = { rightList }
                uploadedItems = { uploadedRightItems }
                selectItem = { selectItem }
                selectedItem = { selectedItem }
                buttons = { filterButtons }
                updateButton = { updateFilterButton }
                removeItem = {removeRightItem}
                addItem = {addItemInRightSide}
            /> 
        </div>
    )
}

export default DragDropContext(HTML5Backend)(ListsContainer);