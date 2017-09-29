const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_LEFT_LIST': return action.payload
		case 'ADD_LEFTSIDE_ITEM': return action.payload
		case 'REMOVE_LEFTSIDE_ITEM': return action.payload
		default: return state
	}
}