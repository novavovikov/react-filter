import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getList } from '../actions/getList';
import { findItems } from '../actions/findItems';
import { changeCheckbox } from '../actions/changeCheckbox';
import { selectItem } from '../actions/selectItem';

import LeftSide from './leftSide'
import RightSide from './rightSide'
import PreviewItem from './previewItem'

const App = (props) => {
    if (props.uploadedItems.length === 0) {
        props.onGetList();
    }

    return (
        <div className='app'>
            <LeftSide 
                list={props.list}
                uploadedItems={props.uploadedItems}
                onFindItems={props.onFindItems} 
                checkboxStatus={props.checkboxStatus}
                changeCheckbox={props.changeCheckbox}
                selectItem={props.selectItem}
            />
            
            {(props.selectedItem === null) ? '' : 
                <PreviewItem 
                    selectedItem={props.selectedItem}
                />
            }

            <RightSide 
                list={props.list}
                selectItem={props.selectItem}
            />
        </div>
    )
}

//
function mapStateToProps(state) {
	return {
        uploadedItems: state.getList,
        checkboxStatus: state.changeCheckbox,
        selectedItem: state.selectItem,
        list: (function() {
            var arr = state.findItems.slice();
            if (!state.changeCheckbox) arr.reverse();

            return arr;
        })()
	}
}

function matchDispatchtoProps(dispatch) {
	return bindActionCreators({
        onGetList: getList,
        onFindItems: findItems,
        changeCheckbox: changeCheckbox,
        selectItem: selectItem,
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchtoProps)(App);