import getList from '../selectors/getList'

export const getRightList = () => {
	return dispatch => {
		getList(dispatch, 'rightSide.json', 'RIGHT');
	}
}