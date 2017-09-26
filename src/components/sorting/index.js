import React from 'react';
import './sorting.css';

const Sorting = ({uploadedItems, list, onFindItems, checkboxStatus, changeCheckbox}) => {
    const handleCheckbox = function(e) {
        changeCheckbox(e.target.checked);
    }
    
    const changeInput = function(e) {
        var inputValue = e.target.value.toLowerCase(),
            newList = uploadedItems.filter(function(item) {
                return item.name.toLowerCase().includes(inputValue);
            });

        onFindItems(newList);
    };

    return(
        <div className="sorting">
            <div className="sorting__checkbox">
                <label>Sort</label>
                <input 
                    type="checkbox"
                    checked={checkboxStatus}
                    onChange={handleCheckbox}
                />
            </div>

            <div className="sorting__input">
                <input 
                    type="text" 
                    placeholder="Text filter..." 
                    onChange={changeInput}
                />
            </div>
        </div>
    )
}

export default Sorting;