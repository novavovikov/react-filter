const initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_RIGHT_LIST': return action.payload
		case 'ADD_RIGHTSIDE_ITEM': return action.payload
		case 'REMOVE_RIGHTSIDE_ITEM': return action.payload
		default: return state
	}
}