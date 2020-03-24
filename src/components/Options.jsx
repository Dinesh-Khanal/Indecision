import React from 'react';
import Option from './Option';

const Options = (props) => {
    return ( <div>
        <div className="widget__header">
        <h3>Your Options</h3>
        <button className="sm-button button--link" onClick={props.onRemoveAll}>
            Remove All
        </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add option to get started</p>}
        
        {props.options.map((opt,index) =>(
            <div key={index} className="option">
            <Option optionText={opt} count={index+1} />
            <button onClick={() =>props.onRemove(opt)} 
            className="sm-button button--link">Remove</button>
            </div>
        ))}
    </div> );
}
export default Options;