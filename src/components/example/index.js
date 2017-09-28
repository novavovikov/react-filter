import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './Container';
 
class Example extends Component {
	render() {
		const listOne = [
			{ id: 1, text: "Item 1" },
			{ id: 2, text: "Item 2" },
			{ id: 3, text: "Item 3" }
		];
 
		const listTwo = [
			{ id: 4, text: "Item 4" },
			{ id: 5, text: "Item 5" },
			{ id: 6, text: "Item 6" }
		];
 
		return (
			<div>
				<Container id={1} list={listOne} />
				<Container id={2} list={listTwo} />
			</div>
		);
	}
}
 
export default DragDropContext(HTML5Backend)(Example);