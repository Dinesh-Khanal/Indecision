import React, {useState} from 'react';

const AddOption = (props) => {
    const[err, setErr] = useState(undefined)
    const handleSubmit = (e) =>{
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = props.addOption(option);
        if(!error){
            e.target.elements.option.value = "";
            setErr(undefined);
        }else{
            setErr(error);
        }
    }

    return ( <div>
        {err&&<p className="add-option-error">{err}</p>}
        <form onSubmit={handleSubmit} className="add-option">
            <input type="text" name="option" className="add-option__input"/>
            <button className="sm-button">Add Option</button>
        </form>
    </div> );
}
 
export default AddOption;