import React from 'react';
import './filter.css';

const btns = ['flower', 'heart', 'sun', 'flash']

const Filter = () => {
    const handleFilter = function(e) {
        var type = e.target.getAttribute('data-type');
        console.log(type);
    }

    return(
        <div className="filter">
           <div className="filter__label">Filters:</div>

           <div className="filter-list">
                {btns.map((item, ndx) => (
                        <button 
                            key={ndx} 
                            className={"filter__item _" + item}
                            data-type={item}
                            onClick={handleFilter}
                        ></button>
                    ))
                }
           </div>
        </div>
    )
}

export default Filter;