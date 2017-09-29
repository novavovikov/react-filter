import React from 'react';
import './sorting.css';

const Sorting = ({
        list, 
        uploadedItems, 
        searchInput,
        onChangeSearchInput,
        checkboxStatus, 
        changeCheckbox
    }) => {
        const handleCheckbox = function(e) {
            changeCheckbox(e.target.checked);
        }
        
        const changeInput = function(e) {
            onChangeSearchInput(e.target.value)
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
                        value={searchInput}
                    />
                </div>
            </div>
        )
    }

export default Sorting;