import React from 'react';
import './items.css';

const Items = ({
        list, 
        selectItem
    }) => {
        return (
            <div className="list-items">
                {list.map((item, ndx) => (
                    <div 
                        key={ndx} 
                        className='list-item'
                        onClick={() => selectItem(item)}
                    >
                        <div className="list-item__name">{item.name}</div>
                        <div className="list-item__flags">
                            {item.flags.map((flag, index) => (
                                <span 
                                    key={index} 
                                    className={"list-item__flag _" + flag}
                                >
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )
    }

export default Items;