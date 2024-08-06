import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router';
import "../css/salServInfo.css";
import Logo from "../jsx_component/logo";

import ServiceInfo from '../jsx_component/serviceInfo';
import SalaryInfo from '../jsx_component/salaryInfo';
import DoubleButton from '../jsx_component/doubleButton';

function SalServInfo(){

    const salServNavigate = useNavigate();
    const { state } = useLocation();

    var salServData = state["info"];

    var state_used = "no";
    
    if(state["used"] === "yes"){
        state_used = "yes";
    }


    const setSalServData = (data) => {

        salServData = {...salServData, ...data};

    };


    function onSalServAuthenticate(button){

        if(button == "first")
            salServNavigate('/application/2', {state: {info: salServData, used: "yes"}});

        if(button == "second"){
            salServNavigate('/application/4', {state: {info: salServData, used: state_used}});
        }

    }


    return(
        <div>
            <div className="salServ_logo">
                <Logo />
            </div>

            <div className='salServ_info'>

                <ServiceInfo service_data={state["info"]}  setServData={(data) => {setSalServData(data)}} />

                <SalaryInfo salary_data={state["info"]} setSalData={(data) => {setSalServData(data)}} />

                <DoubleButton 
                    firstButtonName="পূর্ববর্তী"
                    secondButtonName="পরবর্তী"
                    clickedButton={(clicked) => {onSalServAuthenticate(clicked)}}
                />

            </div>
        </div>
            
    );


}

export default SalServInfo;