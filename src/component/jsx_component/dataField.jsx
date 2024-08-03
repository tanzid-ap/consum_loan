import React, {useState} from 'react';
import "../css_component/dataField.css";


function DataField(props){

    // const [dataFieldValue, setDataFieldValue] = useState("");
    const [dataFieldValue, setDataFieldValue] = useState(props.value);


    function clearBtnHandle(e){
        e.preventDefault();            
        setDataFieldValue("");
    }



    return(

        <div className="dataField" >
            <div className='dataLabelValid'>
                <span className="dataLabel">
                    {props.label}
                </span>
                <div className="dataValid">
                    {props.validData}
                </div>
            </div>

            <div className='dataInputField'>
                <input type={props.dataType} className="dataInput" name={props.id} 
                placeholder={props.placeholder} value={dataFieldValue} onChange={(e) => setDataFieldValue(e.target.value)}/>

                <button className="dataClearBtn" onClick={clearBtnHandle}>×</button>
            </div>

            

        </div>

        
    )
}

export default DataField;