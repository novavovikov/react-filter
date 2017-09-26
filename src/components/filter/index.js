import React from 'react';
import './filter.css';

const Filter = ({
    buttons,
    updateButton
    }) => {
        return(
            <div className="filter">
                <div className="filter__label">Filters:</div>
                <div className="filter-list">
                    {buttons.map((button, ndx) => (
                            <button 
                                key={ndx} 
                                className={"filter__item _" + button.type + ((button.status) ? ' _active' : '')}
                                onClick={() => {
                                    var newArr = [...buttons];
                                    
                                    newArr.map(function (item) {
                                        if (item.type === button.type) item.status = !button.status;

                                        return item;
                                    })

                                    updateButton(newArr);
                                }}
                            ></button>
                        ))
                    }
                </div>
            </div>
        )
    }

export default Filter;