export function removeItemFromLeftSide(list) {
	return {
	  type: 'REMOVE_LEFTSIDE_ITEM',
	  payload: list
	}
}

export function removeItemFromRightSide(list) {
	return {
	  type: 'REMOVE_RIGHTSIDE_ITEM',
	  payload: list
	}
}

export function addItemInLeftSide(list) {
	return {
	  type: 'ADD_LEFTSIDE_ITEM',
	  payload: list
	}
}

export function addItemInRightSide(list) {
	return {
	  type: 'ADD_RIGHTSIDE_ITEM',
	  payload: list
	}
}