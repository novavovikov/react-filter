const initialState = '';

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_INPUT': return action.payload
        default: return state
    }
}
