import { combineReducers } from 'redux';

import getLeftList from './includes/getLeftList';
import getRightList from './includes/getRightList';
import changeCheckbox from './includes/changeCheckbox';
import filterButtons from './includes/filterButtons';
import searchInput from './includes/searchInput';
import selectItem from './includes/selectItem';

export default combineReducers({
    getLeftList,
    getRightList,
    changeCheckbox,
    filterButtons,
    searchInput,
    selectItem
});