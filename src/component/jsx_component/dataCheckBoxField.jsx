import React, {useState} from 'react';
import "../css_component/dataCheckBoxField.css";



function DataCheckBoxField(props){

    const [checkOPT, setCheckOPT] = useState([false, false, false,false,false]);
    const default_checkOPT = [false, false, false,false,false];


    const items = props.items;


    const data = [];

    const chechBoxHandle = (e) => {
        const { name } = e.target;
        var tempBox = [...checkOPT];
        var temp = tempBox[name];

        if(!temp){
            tempBox = [...default_checkOPT];
            tempBox[name] = !tempBox[name];
        }else{
            tempBox[name] = !tempBox[name];
        }
        setCheckOPT(tempBox);
    };

    for(let i=0;i<items.length;i++){
        var index = i;
        data.push(
            <div className="dataCheckBox">
                <input className="dataCheckBoxInput" type='checkbox' checked={checkOPT[i]}
                 name={index} value={items[i]} onChange={chechBoxHandle}/>
                <div className="dataCheckBoxValue">{items[i]}</div>
            </div>
        );
    }


    

    return(
            
        <div className="dataCheckBoxField" data-validate="">
            <div className="dataCheckBoxLabel">
                {props.label}
            </div>

            {data}

        </div>

    )
}



export default DataCheckBoxField;