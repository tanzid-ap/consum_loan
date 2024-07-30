import React, {useState} from 'react';
import "../css_component/piDataField.css";


function PiDataField(props){

    const [piDataFieldValue, setPiDataFieldValue] = useState(props.value);

    function clearPiBtnHandle(e){
        e.preventDefault();
        const {name} = e.target;
        setPiDataFieldValue("");
    }


    return(

            <div className="piDataField" data-validate={props.validData}>
                <div className="piDataLabel">
                    {props.label}
                </div>

                <div className='piDataInputField'>
                    <input onFocus={(e) => (e.target.type = props.dataType)} className="piDataInput" name={props.id} 
                    placeholder={props.placeholder} value={piDataFieldValue} onChange={(e) => setPiDataFieldValue(e.target.value)}/>

                    <button className="piDataClearBtn" name={props.id} onClick={clearPiBtnHandle}>×</button>
                </div>

                

            </div>
    )


}


export default PiDataField;