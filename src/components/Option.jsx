import React from 'react';

const Option = (props) => {
return ( <div className="option__text">
    <p>{props.count}. {props.optionText}</p>
    </div> );
}
 
export default Option;