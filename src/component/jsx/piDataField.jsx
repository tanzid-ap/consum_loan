import React, {useState} from 'react';
import "../css/piDataField.css";


function PiDataField(props){

    const [piDataFieldValue, setPiDataFieldValue] = useState("");

    function clearPiBtnHandle(e){
        e.preventDefault();
        const {name} = e.target;
        setPiDataFieldValue("");
    }


    return(
        <div>
            <div className="piDataField" data-validate={props.validData}>
                <span className="piDataLabel">
                    {props.label}
                </span>

                <div className='piDataInputField'>
                    <input onFocus={(e) => (e.target.type = props.dataType)} className="piDataInput" name={props.id} 
                    placeholder={props.placeholder} value={piDataFieldValue} onChange={(e) => setPiDataFieldValue(e.target.value)}/>

                    <button className="piDataClearBtn" name={props.id} onClick={clearPiBtnHandle}>×</button>
                </div>

                

            </div>

        </div>
    )


}


export default PiDataField;