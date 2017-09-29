import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getLeftList, getRightList } from '../actions/getList';
import {    removeItemFromLeftSide,  
            removeItemFromRightSide, 
            addItemInLeftSide, 
            addItemInRightSide 
        } from '../actions/updateList';
import { changeCheckbox } from '../actions/changeCheckbox';
import { selectItem } from '../actions/selectItem';
import { updateFilterButton } from '../actions/updateFilterButton';
import { changeSearchInput } from '../actions/changeSearchInput';

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
            uploadedRightItems={props.uploadedRightItems}
            searchInput={props.searchInput}
            onChangeSearchInput={props.onChangeSearchInput}
            checkboxStatus={props.checkboxStatus}
            changeCheckbox={props.changeCheckbox}
            selectItem={props.selectItem}
            selectedItem={props.selectedItem}
            filterButtons={props.filterButtons}
            updateFilterButton={props.updateFilterButton}
            removeLeftItem={props.removeItemFromLeftSide}
            removeRightItem={props.removeItemFromRightSide}
            addItemInLeftSide={props.addItemInLeftSide}
            addItemInRightSide={props.addItemInRightSide}
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
        searchInput: state.searchInput,
        leftList: (function() {
            let arr = [...state.getLeftList];
            if (!state.changeCheckbox) arr.reverse();
            return arr.filter((item) => item.name.toLowerCase().includes(state.searchInput.toLowerCase()));
        })(),
        rightList: (function() {
            let buttons = [];

            state.filterButtons.forEach(function(item) {
                if (item.status) buttons.push(item.type);
            });

            return state.getRightList.filter((item) => contains(item.flags, buttons));
        })()
    }
}

function matchDispatchtoProps(dispatch) {
    return bindActionCreators({
        onGetLeftList: getLeftList,
        onGetRightList: getRightList,
        removeItemFromLeftSide: removeItemFromLeftSide,
        removeItemFromRightSide: removeItemFromRightSide,
        addItemInRightSide: addItemInRightSide,
        addItemInLeftSide: addItemInLeftSide,
        changeCheckbox: changeCheckbox,
        onChangeSearchInput: changeSearchInput,
        selectItem: selectItem,
        updateFilterButton: updateFilterButton
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchtoProps)(App);