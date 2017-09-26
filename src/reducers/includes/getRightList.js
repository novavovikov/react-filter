const initialState = [];

export default function getRightList(state = initialState, action) {
	if (action.type === 'GET_RIGHT_LIST') {
		return action.payload;
	}
	return state;
}