import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getLeftList } from '../actions/getLeftList';
import { getRightList } from '../actions/getRightList';
import { findLeftItems } from '../actions/findLeftItems';
import { changeCheckbox } from '../actions/changeCheckbox';
import { selectItem } from '../actions/selectItem';

import LeftSide from './leftSide'
import RightSide from './rightSide'
import PreviewItem from './previewItem'

const App = (props) => {

    if (props.uploadedLeftItems.length === 0) {
        props.onGetLeftList();
    }

    if (props.rightList.length === 0) {
        props.onGetRightList();
    }
    
    return (
        <div className='app'>
            <LeftSide 
                list={props.leftList}
                uploadedItems={props.uploadedLeftItems}
                onFindItems={props.onFindItems} 
                checkboxStatus={props.checkboxStatus}
                changeCheckbox={props.changeCheckbox}
                selectItem={props.selectItem}
                selectedItem={props.selectedItem}
            />
            
            {(props.selectedItem === null) ? '' : 
                <PreviewItem 
                    selectedItem={props.selectedItem}
                />
            }

            <RightSide 
                list={props.rightList}
                selectItem={props.selectItem}
                selectedItem={props.selectedItem}
            />
        </div>
    )
}

//
function mapStateToProps(state) {
	return {
        uploadedLeftItems: state.getLeftList,
        checkboxStatus: state.changeCheckbox,
        selectedItem: state.selectItem,
        leftList: (function() {
            var arr = state.findLeftItems.slice();
            if (!state.changeCheckbox) arr.reverse();
            return arr;
        })(),
        rightList: state.getRightList
	}
}

function matchDispatchtoProps(dispatch) {
	return bindActionCreators({
        onGetLeftList: getLeftList,
        onGetRightList: getRightList,
        onFindItems: findLeftItems,
        changeCheckbox: changeCheckbox,
        selectItem: selectItem,
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchtoProps)(App);