const initialState = [
	{
		type: 'flower',
		status: false    
	},
	{
		type: 'heart',
		status: false    
	},
	{
		type: 'sun',
		status: true    
	},
	{
		type: 'flash',
		status: false    
	}
];

export default function filterButtons (state = initialState, action) {
	if (action.type === 'FILTER_BUTTONS') {
		return action.payload;
	}
	return state;
}