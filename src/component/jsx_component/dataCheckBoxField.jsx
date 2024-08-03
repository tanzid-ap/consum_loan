import React, {useState} from 'react';
import "../css_component/dataCheckBoxField.css";



function DataCheckBoxField(props){

    const [checkOPT, setCheckOPT] = useState([false, false, false,false,false]);
    const default_checkOPT = [false, false, false,false,false];
    const [checkedValue, setCheckedValue] = useState("");

    const items = props.items;

    const chechBoxHandle = (e) => {
        const { name } = e.target;
        var tempBox = [...checkOPT];
        var temp = tempBox[name];

        if(!temp){
            tempBox = [...default_checkOPT];
            tempBox[name] = !tempBox[name];
            setCheckedValue(e.target.value);
        }else{
            tempBox[name] = !tempBox[name];
            setCheckedValue("");
        }
        setCheckOPT(tempBox);
        props.value(checkedValue);
    };

    const data = [];

    for(let i=0;i<items[0].length;i++){
        var index = i;
        data.push(
            <div className="dataCheckBox">
                <input className="dataCheckBoxInput" type='checkbox' checked={checkOPT[i]}
                 name={index} value={items[1][i]} onChange={chechBoxHandle}/>
                <div className="dataCheckBoxValue">{items[0][i]}</div>
            </div>
        );
    }


    

    return(
            
        <div className="dataCheckBoxField" data-validate="">
            <div className="dataCheckBoxLabelValid">
                <div className="dataCheckBoxLabel">
                    {props.label}
                </div>
                <div className="dataCheckBoxValid">
                    {props.validData}
                </div>
            </div>

            {data}

        </div>

    )
}



export default DataCheckBoxField;