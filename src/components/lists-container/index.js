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
    onFindItems,
    checkboxStatus,
    changeCheckbox,
    selectItem,
    selectedItem,
    filterButtons,
    onRemoveItem,
    updateFilterButton
}) => {
    const handleButton = function() {
        onRemoveItem(123)
    }

    return (
        <div className="lists">
            <button
                onClick={handleButton}
            >
                Удалить!
            </button>


            <LeftSide   
                id={1}
                list = { leftList }
                uploadedItems = { uploadedLeftItems }
                onFindItems = { onFindItems }
                checkboxStatus = { checkboxStatus }
                changeCheckbox = { changeCheckbox }
                selectItem = { selectItem }
                selectedItem = { selectedItem }
            />
            
            {(selectedItem === null) ? '' :
                <PreviewItem
                    selectedItem = { selectedItem }
                />
            }

            <RightSide 
                id={2}
                list = { rightList }
                selectItem = { selectItem }
                selectedItem = { selectedItem }
                buttons = { filterButtons }
                updateButton = { updateFilterButton }
            /> 
        </div>
    )
}

export default DragDropContext(HTML5Backend)(ListsContainer);