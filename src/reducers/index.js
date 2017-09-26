import { combineReducers } from 'redux';

import getLeftList from './includes/getLeftList';
import getRightList from './includes/getRightList';
import findLeftItems from './includes/findLeftItems';
import findRightItems from './includes/findRightItems';
import changeCheckbox from './includes/changeCheckbox';
import filterButtons from './includes/filterButtons';
import selectItem from './includes/selectItem';

export default combineReducers({
    getLeftList,
    getRightList,
    findLeftItems,
    findRightItems,
    changeCheckbox,
    filterButtons,
    selectItem
});