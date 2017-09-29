import getList from '../selectors/getList'

export const getLeftList = () => {
	return dispatch => {
		getList(dispatch, 'leftSide.json', 'LEFT');
	}
}

export const getRightList = () => {
	return dispatch => {
		getList(dispatch, 'rightSide.json', 'RIGHT');
	}
}