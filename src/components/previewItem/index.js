import React from 'react';
import './preview.css'

const PreviewItem = ({
    selectedItem
}) => {
    console.log(selectedItem);

    return (
        <div className="preview">
            <div className="preview__title">Info</div>
            <div className="preview-info">
                <div className="preview-info__row">
                    <div className="preview-info__label">Name :</div>
                    <div className="preview-info__desc">{selectedItem.name}</div>
                </div>   
                <div className="preview-info__row">
                    <div className="preview-info__label">Flags :</div>
                    <div className="preview-info__desc">
                        {selectedItem.flags.map((item, ndx) => {
                            return <span key={ndx} className={"preview-info__flag _" + item}></span>
                        })}
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default PreviewItem;