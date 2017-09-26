export const getList = () => {
	return dispatch => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', 'leftSide.json', false);
		xhr.send();

		if (xhr.status !== 200) {
			console.log( xhr.status + ': ' + xhr.statusText ); 
		} else {
			const list = JSON.parse(xhr.responseText); 

			list.sort(function(a, b) {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
            });
            
            //
            dispatch({
                type: 'GET_LIST',
                payload: list
			});
			
			//
			dispatch({
				type: 'FIND_ITEMS',
				payload: list
			});
		}
	}
}