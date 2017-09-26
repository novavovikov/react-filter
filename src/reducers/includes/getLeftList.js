const initialState = [];

export default function getLeftList(state = initialState, action) {
	if (action.type === 'GET_LEFT_LIST') {
		return action.payload;
	}
	return state;
}