import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';
import './item.css';

const Item = ({
    id,
    item,
    indexItem,
    selectItem,
    selectedItem,
    connectDragSource,
    connectDropTarget,
    card,
    pushItem,
    isDragging
}) => {
    return connectDragSource(connectDropTarget(
        <div 
            className={
                ((selectedItem !== null && selectedItem.id === item.id) || isDragging) ? (
                    (isDragging) ? 'list-item _dragging' : 'list-item _active'
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
    ));
}

const cardSource = {
    beginDrag(props) {
        return {			
            index: props.indexItem,
            listId: props.id,
            item: props.item
        };
    },

    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();	

        if ( dropResult && dropResult.listId !== item.listId ) props.removeItem(item.item);
    }
};

const cardTarget = {
    drop(props, monitor) {
		const { id } = props;
        const sourceObj = monitor.getItem();
		if ( id !== sourceObj.listId ) props.pushItem(sourceObj.item);
		return {
			listId: id
		};
	}
    // hover(props, monitor, component) {
    //     const dragIndex = monitor.getItem().index;
    //     const hoverIndex = props.index;
    //     const sourceListId = monitor.getItem().listId;	

    //     if (dragIndex === hoverIndex)  return;
        
    //     const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    //     const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    //     const clientOffset = monitor.getClientOffset();
    //     const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    //     if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
    //     if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

    //     if ( props.listId === sourceListId ) {
    //         props.moveCard(dragIndex, hoverIndex);
    //         monitor.getItem().index = hoverIndex;
    //     }		
    // }
};

export default flow(
	DropTarget(
        "CARD", 
        cardTarget, 
        connect => ({
            connectDropTarget: connect.dropTarget()
        })
    ),
	DragSource (
            "CARD", 
            cardSource, 
            (connect, monitor
        ) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging()
        })
    )
)(Item);