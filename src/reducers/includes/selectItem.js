const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_ITEM': return action.payload
        default: return state
    }
}