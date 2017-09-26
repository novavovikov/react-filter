import { combineReducers } from 'redux';

import getList from './includes/getList';
import findItems from './includes/findItems';
import changeCheckbox from './includes/changeCheckbox';
import selectItem from './includes/selectItem';

export default combineReducers({
    getList,
    findItems,
    changeCheckbox,
    selectItem
});