import React from 'react';
import { DropTarget } from 'react-dnd';
import Item from '../item';
import './items.css';

const Items = ({
		id,
		list, 
		uploadedItems, 
		selectItem,
		selectedItem,
		connectDropTarget,
		removeItem,
		addItem
	}) => {
		const onRemoveItem = function(item) {
			var arr = [...uploadedItems];
			arr.splice(arr.indexOf(item), 1);
            removeItem(arr)
		}

		const moveCard = function(dragIndex, hoverIndex) {
			// console.log(dragIndex, hoverIndex);
		}

		const pushItem = function(item) { 
			var arr = [...uploadedItems];
			arr.push(item)
			addItem(arr)
		}

		return connectDropTarget(
			<div className="list-items">
				{list.map((item, i) => (
					<Item 
						id={id}
						indexItem={i}
						key={item.id} 
						item={item} 
						selectItem={selectItem}
						selectedItem={selectedItem}
						removeItem={onRemoveItem}
						moveCard={moveCard}
						pushItem={pushItem}
					/>
				))}
			</div>
		)
	}

const cardTarget = {}
	
export default DropTarget("CARD", cardTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))(Items);