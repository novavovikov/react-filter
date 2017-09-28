import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getLeftList } from '../actions/getLeftList';
import { getRightList } from '../actions/getRightList';
import { findLeftItems } from '../actions/findLeftItems';
import { changeCheckbox } from '../actions/changeCheckbox';
import { selectItem } from '../actions/selectItem';
import { updateFilterButton } from '../actions/updateFilterButton';
import { removeItem } from '../actions/removeItem';

import ListsContainer from './lists-container'

import contains from '../selectors/contains'

const App = (props) => {
    if (props.uploadedLeftItems.length === 0) props.onGetLeftList();
    if (props.uploadedRightItems.length === 0) props.onGetRightList();

    return ( 
        <ListsContainer
            leftList={props.leftList}
            rightList={props.rightList}
            uploadedLeftItems={props.uploadedLeftItems}
            onFindItems={props.onFindItems}
            checkboxStatus={props.checkboxStatus}
            changeCheckbox={props.changeCheckbox}
            selectItem={props.selectItem}
            selectedItem={props.selectedItem}
            filterButtons={props.filterButtons}
            updateFilterButton={props.updateFilterButton}
            onRemoveItem={props.onRemoveItem}
        />
    )
}

//
function mapStateToProps(state) {
    return {
        uploadedLeftItems: state.getLeftList,
        uploadedRightItems: state.getRightList,
        checkboxStatus: state.changeCheckbox,
        selectedItem: state.selectItem,
        filterButtons: state.filterButtons,
        leftList: (function() {
            let arr = [...state.findLeftItems];
            if (!state.changeCheckbox) arr.reverse();
            return arr;
        })(),
        rightList: (function() {
            let buttons = [];

            state.filterButtons.forEach(function(item) {
                if (item.status) buttons.push(item.type);
            });

            return state.getRightList.filter((item) => contains(item.flags, buttons));
        })(),
    }
}

function matchDispatchtoProps(dispatch) {
    return bindActionCreators({
        onGetLeftList: getLeftList,
        onGetRightList: getRightList,
        onFindItems: findLeftItems,
        changeCheckbox: changeCheckbox,
        selectItem: selectItem,
        updateFilterButton: updateFilterButton,
        onRemoveItem: removeItem
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchtoProps)(App);