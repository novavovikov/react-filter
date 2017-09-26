const initialState = [];

export default function findRightItems (state = initialState, action) {
	if (action.type === 'FIND_RIGHT_ITEMS') {
		return action.payload;
	}
	return state;
}