import React from 'react';
import './items.css';

const Items = ({
        list, 
        selectItem,
        selectedItem
    }) => {
        return (
            <div className="list-items">
                {list.map((item) => (
                    <div 
                        key={item.id} 
                        className={
                            (selectedItem !== null && selectedItem.id === item.id) ? (
                                'list-item _active'
                            ) : 'list-item'
                        }
                        onClick={() => {
                            selectItem(item);
                        }}
                    >
                        <div className="list-item__name">{item.name}</div>
                        <div className="list-item__flags">
                            {item.flags.map((flag, index) => (
                                <span 
                                    key={index} 
                                    className={"list-item__flag _" + flag}
                                ></span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )
    }

export default Items;