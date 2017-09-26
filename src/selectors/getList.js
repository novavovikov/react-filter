export default function getList(dispatch, url, side) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, false);
    xhr.send();

    if (xhr.status !== 200) {
        console.log( xhr.status + ': ' + xhr.statusText ); 
    } else {
        try  {
            const list = JSON.parse(xhr.responseText); 

            list.sort(function(a, b) {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            });
            
            //
            dispatch({
                type: `GET_${side}_LIST`,
                payload: list
            });
            
            //
            dispatch({
                type: `FIND_${side}_ITEMS`,
                payload: list
            });
        }
         catch (e) {
             console.log(e.message);
        }
    }
}