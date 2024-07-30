import React from "react";
import "../css_component/doubleButton.css"


function DoubleButton(props){


    function onFirstButtonHandle(e){
        e.preventDefault();
        props.clickedButton("first");

    }

    function onSecondButtonHandle(e){
        e.preventDefault();
        props.clickedButton("second");
    }



    return(
        <div className='doubleButton'>
            <button className='normalButton' onClick={onFirstButtonHandle} >
                {props.firstButtonName}
            </button>
            <button className='normalButton' onClick={onSecondButtonHandle} >
                {props.secondButtonName}
            </button>
        </div>
    );
}

export default DoubleButton;