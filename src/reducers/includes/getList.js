const initialState = [];

export default function getList(state = initialState, action) {
	if (action.type === 'GET_LIST') {
		return action.payload;
	}
	return state;
}