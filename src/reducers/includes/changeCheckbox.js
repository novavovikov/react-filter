const initialState = true;

export default function changeCheckbox (state = initialState, action) {
	if (action.type === 'CHANGE_CHECKBOX') {
		return action.payload;
	}
	return state;
}