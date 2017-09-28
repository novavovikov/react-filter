import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getLeftList } from '../actions/getLeftList';
import { getRightList } from '../actions/getRightList';
import { findLeftItems } from '../actions/findLeftItems';
import { changeCheckbox } from '../actions/changeCheckbox';
import { selectItem } from '../actions/selectItem';
import { updateFilterButton } from '../actions/updateFilterButton';

import LeftSide from './leftSide'
import RightSide from './rightSide'
import PreviewItem from './previewItem'
import Example from './example'

import contains from '../selectors/contains'

const App = (props) => {
    if (props.uploadedLeftItems.length === 0) {
        props.onGetLeftList();
    }

    if (props.uploadedRightItems.length === 0) {
        props.onGetRightList();
    }

    return ( 
        <div className = 'app'>
            <Example />
            
            <LeftSide   
                list = { props.leftList }
                uploadedItems = { props.uploadedLeftItems }
                onFindItems = { props.onFindItems }
                checkboxStatus = { props.checkboxStatus }
                changeCheckbox = { props.changeCheckbox }
                selectItem = { props.selectItem }
                selectedItem = { props.selectedItem }
            />

            {(props.selectedItem === null) ? '' :
                <PreviewItem
                    selectedItem = { props.selectedItem }
                />
            }

            <RightSide 
                list = { props.rightList }
                selectItem = { props.selectItem }
                selectedItem = { props.selectedItem }
                buttons = { props.filterButtons }
                updateButton = { props.updateFilterButton }
            /> 
        </div>
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
        updateFilterButton: updateFilterButton
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchtoProps)(App);