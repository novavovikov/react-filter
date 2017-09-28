import React from 'react';
import { DropTarget } from 'react-dnd';
import Item from '../item';
import './items.css';

const Items = ({
		id,
		list, 
		selectItem,
		selectedItem,
		connectDropTarget
	}) => {
		const pushCard = function(card) { 
			console.log(card);
			// this.setState(update(this.state, {
			// 	cards: {
			// 		$push: [ card ]
			// 	}
			// }));
		}

		const moveCard = function(dragIndex, hoverIndex) {
			// console.log(dragIndex, hoverIndex);
		}
		
		const removeCard = function(index) {
			console.log(index);
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
						removeCard={removeCard}
						moveCard={moveCard}
					/>
				))}
			</div>
		)
	}

const cardTarget = {
	drop(props, monitor) {
		const { id } = props;
		const sourceObj = monitor.getItem();
		// if ( id !== sourceObj.listId ) component.pushCard(sourceObj.card);
		return {
			listId: id
		};
	}
}
	
export default DropTarget("CARD", cardTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))(Items);