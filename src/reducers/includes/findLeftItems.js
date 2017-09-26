const initialState = [];

export default function findLeftItems (state = initialState, action) {
	if (action.type === 'FIND_LEFT_ITEMS') {
		return action.payload;
	}
	return state;
}