import React, {useState} from 'react';
import "../css/dataField.css";


function DataField(props){

    const [dataFieldValue, setDataFieldValue] = useState("");


    function clearBtnHandle(e){
        e.preventDefault();            
        setDataFieldValue("");
    }



    return(
        <div>
            <div className="dataField" data-validate={props.validData}>
                <span className="dataLabel">
                    {props.label}
                </span>

                <div className='dataInputField'>
                    <input type={props.dataType} className="dataInput" name={props.id} 
                    placeholder={props.placeholder} value={dataFieldValue} onChange={(e) => setDataFieldValue(e.target.value)}/>

                    <button className="dataClearBtn" onClick={clearBtnHandle}>×</button>
                </div>

                

            </div>
        </div>
        
    )
}

export default DataField;